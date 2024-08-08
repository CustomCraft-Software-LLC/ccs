import * as fs from 'fs';
import { Client as PgClient } from 'pg';
import mysql from 'mysql2/promise';
import axios from 'axios';

// Helper functions for each logging method
const logToFile = (fileName: string, message: string): void => {
    fs.appendFileSync(fileName, `${new Date().toISOString()} - ${message}\n`);
};

const logToConsole = (message: string): void => {
    console.log(`${new Date().toISOString()} - ${message}`);
};

const logToJsonFile = (fileName: string, message: string): void => {
    const logEntry = {
        timestamp: new Date().toISOString(),
        level: 'info',
        message: message
    };
    fs.appendFileSync(fileName, JSON.stringify(logEntry) + '\n');
};

const logToMySQL = async (connection: mysql.Connection, message: string): Promise<void> => {
    try {
        await connection.query('INSERT INTO logs (timestamp, message) VALUES (?, ?)', [new Date().toISOString(), message]);
    } catch (error) {
        console.error('MySQL logging error:', error);
    }
};

const logToPostgreSQL = async (client: PgClient, message: string): Promise<void> => {
    try {
        await client.query('INSERT INTO logs (timestamp, message) VALUES ($1, $2)', [new Date().toISOString(), message]);
    } catch (error) {
        console.error('PostgreSQL logging error:', error);
    }
};

const logToApi = async (url: string, message: string): Promise<void> => {
    try {
        await axios.post(url, { timestamp: new Date().toISOString(), message });
    } catch (error) {
        console.error('API logging error:', error);
    }
};

// Main Log class
class Log {
    private fileName?: string;
    private jsonFileName?: string;
    private mysqlConnection?: mysql.Connection;
    private pgClient?: PgClient;
    private apiUrl?: string;

    constructor(config: {
        file?: string;
        json?: string;
        mysql?: { host: string, user: string, database: string, password: string },
        postgresql?: { connectionString: string },
        api?: string
    }) {
        if (config.file) {
            this.fileName = config.file;
        }
        if (config.json) {
            this.jsonFileName = config.json;
        }
        if (config.mysql) {
            this.mysqlConnection = mysql.createPool(config.mysql);
        }
        if (config.postgresql) {
            this.pgClient = new PgClient({ connectionString: config.postgresql.connectionString });
            this.pgClient.connect().catch(console.error);
        }
        if (config.api) {
            this.apiUrl = config.api;
        }
    }

    async file(message: string): Promise<void> {
        if (this.fileName) {
            logToFile(this.fileName, message);
        }
    }

    console(message: string): void {
        logToConsole(message);
    }

    async dbMySQL(message: string): Promise<void> {
        if (this.mysqlConnection) {
            await logToMySQL(this.mysqlConnection, message);
        }
    }

    async dbPostgreSQL(message: string): Promise<void> {
        if (this.pgClient) {
            await logToPostgreSQL(this.pgClient, message);
        }
    }

    async api(message: string): Promise<void> {
        if (this.apiUrl) {
            await logToApi(this.apiUrl, message);
        }
    }

    async json(message: string): Promise<void> {
        if (this.jsonFileName) {
            logToJsonFile(this.jsonFileName, message);
        }
    }

    async close(): Promise<void> {
        if (this.pgClient) {
            await this.pgClient.end();
        }
        if (this.mysqlConnection) {
            await this.mysqlConnection.end();
        }
    }
}

// Usage example
const log = new Log({
    file: 'app.log',
    json: 'app.json',
    mysql: { host: 'localhost', user: 'root', database: 'mydatabase', password: 'password' },
    postgresql: { connectionString: 'postgres://user:password@localhost:5432/mydatabase' },
    api: 'http://example.com/log'
});

log.console('This is a console log message');
log.file('This is a file log message');
log.json('This is a JSON log message');
log.dbMySQL('This is a MySQL log message');
log.dbPostgreSQL('This is a PostgreSQL log message');
log.api('This is an API log message');

// Make sure to close connections when done
log.close().catch(console.error);
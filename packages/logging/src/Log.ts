import * as fs from 'fs';
import axios from 'axios';
import chalk from 'chalk';

// Helper function to format log entries with multi-line support
const formatLogEntry = (level: string, message: string): string => {
    const timestamp = new Date().toLocaleString(); // More readable timestamp format
    const levelString = level.toUpperCase().padEnd(7);
    
    // Split message into lines and format each line
    return message.split('\n').map(line => `[${timestamp}] ${levelString} - ${line}`).join('\n');
};

// Color-coded console logging
const colorizeLog = (level: string, message: string): string => {
    switch (level.toLowerCase()) {
        case 'info':
            return chalk.blue(message);
        case 'warn':
            return chalk.yellow(message);
        case 'error':
            return chalk.red(message);
        default:
            return message;
    }
};

// Log to a file
const logToFile = (fileName: string, level: string, message: string): void => {
    fs.appendFileSync(fileName, formatLogEntry(level, message) + '\n');
};

// Log to the console
const logToConsole = (level: string, message: string): void => {
    console.log(colorizeLog(level, formatLogEntry(level, message)));
};

// Log to a JSON file with proper indentation
const logToJsonFile = (fileName: string, level: string, message: string): void => {
    const logEntry = {
        timestamp: new Date().toISOString(),
        level: level.toUpperCase(),
        message: message
    };
    fs.appendFileSync(fileName, JSON.stringify(logEntry, null, 2) + '\n'); // Indent JSON with 2 spaces
};

// Log to an API
const logToApi = async (url: string, level: string, message: string): Promise<void> => {
    try {
        await axios.post(url, { timestamp: new Date().toISOString(), level: level.toUpperCase(), message });
    } catch (error) {
        console.error('API logging error:', error);
    }
};

// Main Log class
class Log {
    private static fileName?: string;
    private static jsonFileName?: string;
    private static apiUrl?: string;

    static open(config: {
        file?: string;
        json?: string;
        api?: string
    }): void {
        if (config.file) {
            this.fileName = config.file;
        }
        if (config.json) {
            this.jsonFileName = config.json;
        }
        if (config.api) {
            this.apiUrl = config.api;
        }
    }

    static async log(level: string, message: string): Promise<void> {
        if (this.fileName) {
            logToFile(this.fileName, level, message);
        }
        if (this.jsonFileName) {
            logToJsonFile(this.jsonFileName, level, message);
        }
        if (this.apiUrl) {
            await logToApi(this.apiUrl, level, message);
        }
        logToConsole(level, message);
    }
}

export default Log;
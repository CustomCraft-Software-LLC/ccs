import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import moment from 'moment-timezone';
import { blue, green, yellow, red, reset } from 'colorette';

// Define a union type for the log levels
type LogLevel = 0 | 1 | 2 | 3;

export class Logger {
    static LEVELS = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3
    } as const;

    private level: LogLevel;
    private logFilePath: string;
    private jsonFilePath: string;

    constructor(
        level: LogLevel = Logger.LEVELS.INFO,
        logFilePath: string = path.join(this.getBaseDir(), '../logs/app.log'),
        jsonFilePath: string = path.join(this.getBaseDir(), '../logs/app.json')
    ) {
        this.level = level;
        this.logFilePath = logFilePath;
        this.jsonFilePath = jsonFilePath;
    }

    private getBaseDir(): string {
        return path.dirname(fileURLToPath(import.meta.url));
    }

    private getTimestamp(): string {
        return moment().format('YYYY-MM-DD HH:mm:ss zzz');
    }

    private formatMessage(level: LogLevel, message: string, color: boolean = true): string {
        const colorMap: { [key: number]: (text: string) => string } = {
            [Logger.LEVELS.DEBUG]: blue,
            [Logger.LEVELS.INFO]: green,
            [Logger.LEVELS.WARN]: yellow,
            [Logger.LEVELS.ERROR]: red
        };

        const levelName = Object.keys(Logger.LEVELS).find(key => Logger.LEVELS[key as keyof typeof Logger.LEVELS] === level) || 'UNKNOWN';
        const colorFunc = color ? (colorMap[level] || ((text: string) => text)) : (text: string) => text;

        return `${this.getTimestamp()} ${colorFunc(`[${levelName}]`)} - ${message}`;
    }

    private log(level: LogLevel, message: string) {
        if (level >= this.level) {
            const formattedMessage = this.formatMessage(level, message);
            this.appendToFile(this.logFilePath, formattedMessage);
            this.appendToJsonFile(level, message);
        }
    }

    private appendToFile(filePath: string, message: string) {
        fs.appendFile(filePath, message + '\n', err => {
            if (err) console.error('Failed to write to log file:', err);
        });
    }

    private appendToJsonFile(level: LogLevel, message: string) {
        const logEntry = {
            timestamp: this.getTimestamp(),
            level: Object.keys(Logger.LEVELS).find(key => Logger.LEVELS[key as keyof typeof Logger.LEVELS] === level) || 'UNKNOWN',
            message
        };

        fs.readFile(this.jsonFilePath, (err, data) => {
            let json: any[] = [];
            if (!err && data.length > 0) {
                try {
                    json = JSON.parse(data.toString());
                } catch {
                    console.error('Failed to parse JSON file, creating a new one.');
                }
            }
            json.push(logEntry);
            fs.writeFile(this.jsonFilePath, JSON.stringify(json, null, 2), err => {
                if (err) console.error('Failed to write to JSON file:', err);
            });
        });
    }

    sendAPI(url: string, jsonFilePaths: string[]) {
        let allLogs: any[] = [];

        jsonFilePaths.forEach(filePath => {
            try {
                const data = fs.readFileSync(filePath, 'utf8');
                if (data.length > 0) {
                    const logs = JSON.parse(data);
                    allLogs = allLogs.concat(logs);
                }
            } catch (err) {
                console.error(`Failed to read or parse JSON file: ${filePath}`, err);
            }
        });

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(allLogs)
        })
        .then(response => response.json())
        .then(responseData => {
            console.log('Successfully sent logs:', responseData);
        })
        .catch(error => {
            console.error('Failed to send logs:', error);
        });
    }

    debug(message: string) {
        this.log(Logger.LEVELS.DEBUG, message);
    }

    info(message: string) {
        this.log(Logger.LEVELS.INFO, message);
    }

    warn(message: string) {
        this.log(Logger.LEVELS.WARN, message);
    }

    error(message: string) {
        this.log(Logger.LEVELS.ERROR, message);
    }

    setLevel(level: LogLevel) {
        if (Object.values(Logger.LEVELS).includes(level)) {
            this.level = level;
        } else {
            throw new Error('Invalid log level');
        }
    }
}
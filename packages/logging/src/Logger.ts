import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import moment from 'moment-timezone';
import { blue, green, yellow, red } from 'colorette';

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
    private timezone: string;

    constructor(
        level: LogLevel = Logger.LEVELS.INFO,
        timezone: string = 'UTC',
        logDir: string = path.join(__dirname, '../logs')
    ) {
        this.level = level;
        this.timezone = timezone;
        const date = moment().tz(this.timezone).format('YYYY-MM-DD');
        this.logFilePath = path.join(logDir, `${date}_${this.timezone}.log`);
        this.jsonFilePath = path.join(logDir, `${date}_${this.timezone}.json`);
    }

    private getTimestamp(): string {
        return moment().tz(this.timezone).format('YYYY-MM-DD HH:mm:ss zzz');
    }

    private getLevelName(level: LogLevel): string {
        const levelNames: { [key in LogLevel]: string } = {
            [Logger.LEVELS.DEBUG]: 'DEBUG',
            [Logger.LEVELS.INFO]: 'INFO',
            [Logger.LEVELS.WARN]: 'WARN',
            [Logger.LEVELS.ERROR]: 'ERROR'
        };
        return levelNames[level] || 'UNKNOWN';
    }

    private formatMessage(level: LogLevel, message: string, color: boolean = false): string {
        const colorMap: { [key in LogLevel]: (text: string) => string } = {
            [Logger.LEVELS.DEBUG]: blue,
            [Logger.LEVELS.INFO]: green,
            [Logger.LEVELS.WARN]: yellow,
            [Logger.LEVELS.ERROR]: red
        };

        const levelName = this.getLevelName(level);
        const colorFunc = color ? colorMap[level] : (text: string) => text;

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
            level: this.getLevelName(level),
            message
        };

        fs.readFile(this.jsonFilePath, (err, data) => {
            let json: any[] = [];
            if (!err && data.length > 0) {
                try {
                    json = JSON.parse(data.toString());
                } catch (parseError) {
                    console.error('Failed to parse JSON file:', parseError);
                }
            }

            json.push(logEntry);
            fs.writeFile(this.jsonFilePath, JSON.stringify(json, null, 2), err => {
                if (err) console.error('Failed to write to JSON file:', err);
            });
        });
    }

    sendAPI(url: string, startDate: Date, endDate: Date) {
        fs.readFile(this.jsonFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Failed to read JSON log file:', err);
                return;
            }

            try {
                const logs = JSON.parse(data);
                const filteredLogs = logs.filter((log: any) => {
                    const logDate = new Date(log.timestamp);
                    return logDate >= startDate && logDate <= endDate;
                });

                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(filteredLogs)
                })
                .then(response => response.json())
                .then(responseData => {
                    console.log('Successfully sent logs:', responseData);
                })
                .catch(error => {
                    console.error('Failed to send logs:', error);
                });

            } catch (parseError) {
                console.error('Failed to parse JSON log file:', parseError);
            }
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
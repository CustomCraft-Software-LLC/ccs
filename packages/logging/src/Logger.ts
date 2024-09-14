import fs from 'fs';
import path from 'path';
import moment from 'moment-timezone';
import { blue, green, yellow, red } from 'colorette';
import axios from 'axios';

// Define possible log levels as constants
type LogLevel = 0 | 1 | 2 | 3;

class Logger {
    // Log levels with corresponding numeric values
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

    /**
     * Initializes the Logger instance with specified log level, timezone, and directory.
     * @param {LogLevel} level - The minimum log level to be recorded.
     * @param {string} timezone - The timezone for timestamps.
     * @param {string} logDir - The directory where log files are stored.
     */
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

    /**
     * Gets the current timestamp formatted according to the timezone.
     * @returns {string} The formatted timestamp.
     */
    private getTimestamp(): string {
        return moment().tz(this.timezone).format('YYYY-MM-DD HH:mm:ss zzz');
    }

    /**
     * Converts a numeric log level to its string representation.
     * @param {LogLevel} level - The numeric log level.
     * @returns {string} The string representation of the log level.
     */
    private getLevelName(level: LogLevel): string {
        return ['DEBUG', 'INFO', 'WARN', 'ERROR'][level] || 'UNKNOWN';
    }

    /**
     * Formats a log message with a timestamp, log level, and optional colorization.
     * @param {LogLevel} level - The numeric log level.
     * @param {string} message - The log message.
     * @param {boolean} color - Whether to colorize the message.
     * @returns {string} The formatted log message.
     */
    private formatMessage(level: LogLevel, message: string, color: boolean = false): string {
        const colorMap = [blue, green, yellow, red];
        const levelName = this.getLevelName(level);
        const colorFunc = color ? colorMap[level] : (text: string) => text;

        return `${this.getTimestamp()} ${colorFunc(`[${levelName}]`)} - ${message}`;
    }

    /**
     * Logs a message if its level meets or exceeds the configured log level.
     * @param {LogLevel} level - The numeric log level.
     * @param {string} message - The log message.
     */
    private log(level: LogLevel, message: string) {
        if (level >= this.level) {
            const formattedMessage = this.formatMessage(level, message);
            this.appendToFile(this.logFilePath, formattedMessage);
            this.appendToJsonFile(level, message);
        }
    }

    /**
     * Appends a log message to a plain text file.
     * @param {string} filePath - The path to the log file.
     * @param {string} message - The log message.
     */
    private appendToFile(filePath: string, message: string) {
        fs.appendFile(filePath, message + '\n', err => {
            if (err) console.error('Failed to write to log file:', err);
        });
    }

    /**
     * Appends a log entry to a JSON file.
     * @param {LogLevel} level - The numeric log level.
     * @param {string} message - The log message.
     */
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

    /**
     * Sends filtered logs to an API endpoint.
     * @param {string} url - The API endpoint URL.
     * @param {Date} startDate - The start date for filtering logs.
     * @param {Date} endDate - The end date for filtering logs.
     */
    async sendAPI(url: string, startDate: Date, endDate: Date) {
        try {
            const data = fs.readFileSync(this.jsonFilePath, 'utf8');
            const logs = JSON.parse(data);
            const filteredLogs = logs.filter((log: any) => {
                const logDate = new Date(log.timestamp);
                return logDate >= startDate && logDate <= endDate;
            });

            const response = await axios.post(url, filteredLogs, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log('Successfully sent logs:', response.data);
        } catch (error) {
            console.error('Failed to send logs:', error);
        }
    }

    // Public methods for logging at different levels
    debug(message: string) { this.log(Logger.LEVELS.DEBUG, message); }
    info(message: string) { this.log(Logger.LEVELS.INFO, message); }
    warn(message: string) { this.log(Logger.LEVELS.WARN, message); }
    error(message: string) { this.log(Logger.LEVELS.ERROR, message); }

    /**
     * Sets the minimum log level for the logger.
     * @param {LogLevel} level - The numeric log level to set.
     * @throws Will throw an error if an invalid log level is provided.
     */
    setLevel(level: LogLevel) {
        if (Object.values(Logger.LEVELS).includes(level)) {
            this.level = level;
        } else {
            throw new Error('Invalid log level');
        }
    }
}

export default Logger;
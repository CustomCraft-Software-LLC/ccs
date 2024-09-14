import * as fs from 'fs';
import axios from 'axios';
import chalk from 'chalk';

/**
 * Formats a log message with a timestamp and log level.
 * @param {string} level - The log level (e.g., "INFO", "WARN", "ERROR").
 * @param {string} message - The log message, which can span multiple lines.
 * @returns {string} The formatted log entry with timestamp and level.
 */
const formatLogEntry = (level: string, message: string): string => {
    const timestamp = new Date().toLocaleString();
    const levelString = level.toUpperCase().padEnd(7);
    return message.split('\n').map(line => `[${timestamp}] ${levelString} - ${line}`).join('\n');
};

/**
 * Applies color coding to a log message based on its level.
 * @param {string} level - The log level (e.g., "info", "warn", "error").
 * @param {string} message - The log message to colorize.
 * @returns {string} The colorized log message.
 */
const colorizeLog = (level: string, message: string): string => {
    switch (level.toLowerCase()) {
        case 'info': return chalk.blue(message);
        case 'warn': return chalk.yellow(message);
        case 'error': return chalk.red(message);
        default: return message;
    }
};

/**
 * Logs a message to the console with color coding.
 * @param {string} level - The log level (e.g., "INFO", "ERROR").
 * @param {string} message - The log message.
 */
const logToConsole = (level: string, message: string): void => {
    const formattedMessage = formatLogEntry(level, message);
    console.log(colorizeLog(level, formattedMessage));
};

/**
 * Appends a log entry to a plain text file.
 * @param {string} fileName - The path of the file to append to.
 * @param {string} level - The log level (e.g., "INFO", "ERROR").
 * @param {string} message - The log message.
 */
const logToFile = (fileName: string, level: string, message: string): void => {
    try {
        const logEntry = formatLogEntry(level, message);
        fs.appendFileSync(fileName, logEntry + '\n');
    } catch (error) {
        console.error(`Failed to write to file "${fileName}":`, error);
    }
};

/**
 * Appends a JSON-formatted log entry to a file.
 * @param {string} fileName - The path of the file to append to.
 * @param {string} level - The log level (e.g., "INFO", "ERROR").
 * @param {string} message - The log message.
 */
const logToJsonFile = (fileName: string, level: string, message: string): void => {
    const logEntry = {
        timestamp: new Date().toISOString(),
        level: level.toUpperCase(),
        message
    };
    try {
        fs.appendFileSync(fileName, JSON.stringify(logEntry, null, 2) + '\n');
    } catch (error) {
        console.error(`Failed to write JSON log to file "${fileName}":`, error);
    }
};

/**
 * Sends a log entry to an API endpoint.
 * @param {string} url - The API endpoint URL.
 * @param {string} level - The log level (e.g., "INFO", "ERROR").
 * @param {string} message - The log message.
 */
const logToApi = async (url: string, level: string, message: string): Promise<void> => {
    try {
        await axios.post(url, {
            timestamp: new Date().toISOString(),
            level: level.toUpperCase(),
            message
        });
    } catch (error) {
        console.error('Failed to send log to API:', error);
    }
};

/**
 * A class for managing logging to various destinations.
 */
class Log {
    private static fileName?: string; // Optional file path for plain text logs
    private static jsonFileName?: string; // Optional file path for JSON logs
    private static apiUrl?: string; // Optional API URL for sending log entries

    /**
     * Configures the destinations for logging.
     * @param {Object} config - Configuration object for log destinations.
     * @param {string} [config.file] - Optional file path for plain text logs.
     * @param {string} [config.json] - Optional file path for JSON logs.
     * @param {string} [config.api] - Optional API URL for sending log entries.
     */
    static open(config: { file?: string; json?: string; api?: string }): void {
        if (config.file) this.fileName = config.file;
        if (config.json) this.jsonFileName = config.json;
        if (config.api) this.apiUrl = config.api;
    }

    /**
     * Logs a message to all configured destinations.
     * @param {string} level - The log level (e.g., "INFO", "ERROR").
     * @param {string} message - The log message.
     */
    static async log(level: string, message: string): Promise<void> {
        if (this.fileName) logToFile(this.fileName, level, message);
        if (this.jsonFileName) logToJsonFile(this.jsonFileName, level, message);
        if (this.apiUrl) await logToApi(this.apiUrl, level, message);
        logToConsole(level, message);
    }
}

export default Log;
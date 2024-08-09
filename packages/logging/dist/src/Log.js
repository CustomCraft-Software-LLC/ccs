import * as fs from 'fs';
import axios from 'axios';
import chalk from 'chalk';
// Formats log entries with timestamps and levels
/**
 * Formats a log message with a timestamp and log level.
 * @param {string} level - The log level (e.g., "INFO", "WARN", "ERROR").
 * @param {string} message - The log message, which can span multiple lines.
 * @returns {string} The formatted log entry with timestamp and level.
 */
const formatLogEntry = (level, message) => {
    const timestamp = new Date().toLocaleString();
    const levelString = level.toUpperCase().padEnd(7);
    return message.split('\n').map(line => `[${timestamp}] ${levelString} - ${line}`).join('\n');
};
// Colorizes log messages for console output
/**
 * Applies color coding to log messages based on their level.
 * @param {string} level - The log level (e.g., "info", "warn", "error").
 * @param {string} message - The log message to colorize.
 * @returns {string} The colorized log message.
 */
const colorizeLog = (level, message) => {
    switch (level.toLowerCase()) {
        case 'info': return chalk.blue(message);
        case 'warn': return chalk.yellow(message);
        case 'error': return chalk.red(message);
        default: return message;
    }
};
// Logs to the console
/**
 * Logs a message to the console with color coding.
 * @param {string} level - The log level (e.g., "INFO", "ERROR").
 * @param {string} message - The log message.
 */
const logToConsole = (level, message) => {
    const formattedMessage = formatLogEntry(level, message);
    const colorizedMessage = colorizeLog(level, formattedMessage);
    console.log(colorizedMessage);
};
// Appends log entries to a file
/**
 * Appends a formatted log entry to a specified file.
 * @param {string} fileName - The name of the file where the log entry will be appended.
 * @param {string} level - The log level (e.g., "INFO", "ERROR").
 * @param {string} message - The log message.
 *
 * Logs are formatted with timestamps and levels before being appended. Errors in file operations are logged to the console.
 */
const logToFile = (fileName, level, message) => {
    try {
        const logEntry = formatLogEntry(level, message);
        fs.appendFileSync(fileName, logEntry + '\n');
    }
    catch (error) {
        console.error(`Failed to write log to file "${fileName}":`, error);
    }
};
// Appends formatted JSON log entries to a file
/**
 * Appends a JSON-formatted log entry to a specified file.
 * @param {string} fileName - The name of the file where the JSON log entry will be appended.
 * @param {string} level - The log level (e.g., "INFO", "ERROR").
 * @param {string} message - The log message.
 *
 * Log entries are formatted as JSON with a timestamp and log level, and then appended to the file.
 */
const logToJsonFile = (fileName, level, message) => {
    const logEntry = {
        timestamp: new Date().toISOString(),
        level: level.toUpperCase(),
        message: message
    };
    fs.appendFileSync(fileName, JSON.stringify(logEntry, null, 2) + '\n');
};
// Sends log entries to an API
/**
 * Sends a log entry to a specified API endpoint.
 * @param {string} url - The API endpoint URL.
 * @param {string} level - The log level (e.g., "INFO", "ERROR").
 * @param {string} message - The log message.
 *
 * The log entry is sent as a POST request with JSON payload. Errors in API communication are logged to the console.
 */
const logToApi = async (url, level, message) => {
    try {
        await axios.post(url, { timestamp: new Date().toISOString(), level: level.toUpperCase(), message });
    }
    catch (error) {
        console.error('API logging error:', error);
    }
};
// Main Log class for managing log outputs
/**
 * A class for managing logging to various destinations.
 */
class Log {
    static fileName; // Optional file path for plain text logs
    static jsonFileName; // Optional file path for JSON logs
    static apiUrl; // Optional API URL for sending log entries
    // Configures log destinations
    /**
     * Sets up the destinations for logging.
     * @param {Object} config - Configuration object for log destinations.
     * @param {string} [config.file] - Optional file path for plain text logs.
     * @param {string} [config.json] - Optional file path for JSON logs.
     * @param {string} [config.api] - Optional API URL for sending log entries.
     */
    static open(config) {
        if (config.file)
            this.fileName = config.file;
        if (config.json)
            this.jsonFileName = config.json;
        if (config.api)
            this.apiUrl = config.api;
    }
    // Logs message to configured destinations
    /**
     * Logs a message to all configured destinations.
     * @param {string} level - The log level (e.g., "INFO", "ERROR").
     * @param {string} message - The log message.
     *
     * Logs are sent to the file, JSON file, and API if configured, and also output to the console.
     */
    static async log(level, message) {
        if (this.fileName)
            logToFile(this.fileName, level, message);
        if (this.jsonFileName)
            logToJsonFile(this.jsonFileName, level, message);
        if (this.apiUrl)
            await logToApi(this.apiUrl, level, message);
        logToConsole(level, message);
    }
}
export default Log;

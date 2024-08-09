import * as fs from 'fs';
import * as chalk from 'chalk';
export class Logger {
    filePath;
    tags;
    format;
    constructor(options = {}) {
        this.filePath = options.filePath;
        this.tags = new Set(options.tags ?? []);
        this.format = options.format;
    }
    // Format log message
    formatLog(level, message) {
        const timestamp = new Date().toLocaleString();
        const tagString = this.tags.size ? `[${[...this.tags].join(', ')}]` : '';
        return this.format ? this.format(level, message) : `${tagString} [${timestamp}] [${level.toUpperCase()}] - ${message}`;
    }
    // Colorize log message based on level
    colorize(level, message) {
        switch (level) {
            case 'info':
                return chalk.blue(message);
            case 'warn':
                return chalk.yellow(message);
            case 'error':
                return chalk.red(message);
            default:
                return message;
        }
    }
    // Check if the message matches any of the tags
    matchesTags(message) {
        return Array.from(this.tags).some(tag => message.includes(tag));
    }
    // Write log message to file
    async writeToFile(message) {
        if (this.filePath) {
            try {
                await fs.promises.appendFile(this.filePath, message + '\n', { encoding: 'utf8' });
            }
            catch (error) {
                console.error('Failed to write log to file:', error);
            }
        }
    }
    // Log a message
    async log(level, message) {
        if (this.matchesTags(message)) {
            const formattedMessage = this.formatLog(level, message);
            console.log(this.colorize(level, formattedMessage));
            try {
                await this.writeToFile(formattedMessage);
            }
            catch (error) {
                console.error('Failed to log message:', error);
            }
        }
    }
    // Public logging methods
    async info(message) {
        await this.log('info', message);
    }
    async warn(message) {
        await this.log('warn', message);
    }
    async error(message) {
        await this.log('error', message);
    }
    // Set custom log format function
    setFormat(format) {
        this.format = format;
    }
    // Add or update tags
    setTags(tags) {
        this.tags = new Set(tags);
    }
}

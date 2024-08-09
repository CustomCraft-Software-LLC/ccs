import * as fs from 'fs';
import chalk from 'chalk';

export type LogLevel = 'info' | 'warn' | 'error';

interface LoggerOptions {
    filePath?: string;
    format?: (level: LogLevel, message: string) => string; // Custom format function
    tags?: string[]; // Tags for log filtering
}

export class Logger {
    private filePath?: string;
    private tags: Set<string>;
    private format?: (level: LogLevel, message: string) => string;

    constructor(options: LoggerOptions = {}) {
        this.filePath = options.filePath;
        this.tags = new Set(options.tags ?? []);
        this.format = options.format;
    }

    // Format log message
    private formatLog(level: LogLevel, message: string): string {
        const timestamp = new Date().toLocaleString();
        const tagString = this.tags.size ? `[${[...this.tags].join(', ')}]` : '';
        return this.format ? this.format(level, message) : `${tagString} [${timestamp}] [${level.toUpperCase()}] - ${message}`;
    }

    // Colorize log message based on level
    private colorize(level: LogLevel, message: string): string {
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
    private matchesTags(message: string): boolean {
        return Array.from(this.tags).some(tag => message.includes(tag));
    }

    // Write log message to file
    private async writeToFile(message: string): Promise<void> {
        if (this.filePath) {
            try {
                await fs.promises.appendFile(this.filePath, message + '\n', { encoding: 'utf8' });
            } catch (error) {
                console.error('Failed to write log to file:', error);
            }
        }
    }

    // Log a message
    private async log(level: LogLevel, message: string): Promise<void> {
        if (this.matchesTags(message)) {
            const formattedMessage = this.formatLog(level, message);
            console.log(this.colorize(level, formattedMessage));
            try {
                await this.writeToFile(formattedMessage);
            } catch (error) {
                console.error('Failed to log message:', error);
            }
        }
    }

    // Public logging methods
    async info(message: string): Promise<void> {
        await this.log('info', message);
    }

    async warn(message: string): Promise<void> {
        await this.log('warn', message);
    }

    async error(message: string): Promise<void> {
        await this.log('error', message);
    }

    // Set custom log format function
    setFormat(format: (level: LogLevel, message: string) => string): void {
        this.format = format;
    }

    // Add or update tags
    setTags(tags: string[]): void {
        this.tags = new Set(tags);
    }
}
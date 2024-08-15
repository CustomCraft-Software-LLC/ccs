import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

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
    return new Date().toISOString();
  }

  private formatMessage(level: LogLevel, message: string): string {
    // Define a map for colors
    const colorMap = {
      [Logger.LEVELS.DEBUG]: chalk.blue,
      [Logger.LEVELS.INFO]: chalk.green,
      [Logger.LEVELS.WARN]: chalk.yellow,
      [Logger.LEVELS.ERROR]: chalk.red
    };

    // Get the level name
    const levelName = Object.keys(Logger.LEVELS).find(
      key => Logger.LEVELS[key as keyof typeof Logger.LEVELS] === level
    ) || 'UNKNOWN';

    // Get the color function or default to no color
    const colorFunc = colorMap[level] || chalk.reset;

    // Format the log message
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
      level: Object.keys(Logger.LEVELS).find(
        key => Logger.LEVELS[key as keyof typeof Logger.LEVELS] === level
      ) || 'UNKNOWN',
      message
    };

    fs.readFile(this.jsonFilePath, (err, data) => {
      let json: any[] = [];
      if (!err) {
        try {
          json = JSON.parse(data.toString());
        } catch (parseError) {
          console.error('Failed to parse JSON file:', parseError);
          json = []; // Initialize as empty if parsing fails
        }
      }

      json.push(logEntry);
      fs.writeFile(this.jsonFilePath, JSON.stringify(json, null, 2), err => {
        if (err) console.error('Failed to write to JSON file:', err);
      });
    });
  }

  debug(message: string) {
    this.log(Logger.LEVELS.DEBUG, `[DEBUG]: ${message}`);
  }

  info(message: string) {
    this.log(Logger.LEVELS.INFO, `[INFO]: ${message}`);
  }

  warn(message: string) {
    this.log(Logger.LEVELS.WARN, `[WARN]: ${message}`);
  }

  error(message: string) {
    this.log(Logger.LEVELS.ERROR, `[ERROR]: ${message}`);
  }

  setLevel(level: LogLevel) {
    if (Object.values(Logger.LEVELS).includes(level)) {
      this.level = level;
    } else {
      throw new Error('Invalid log level');
    }
  }
}
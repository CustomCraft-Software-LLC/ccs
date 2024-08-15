import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

export class Logger {
  static LEVELS = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3
  };

  private level: number;
  private logFilePath: string;
  private jsonFilePath: string;

  constructor(
    level: number = Logger.LEVELS.INFO,
    logFilePath: string = path.join(this.getBaseDir(), 'app.log'),
    jsonFilePath: string = path.join(this.getBaseDir(), 'app.json')
  ) {
    this.level = level;
    this.logFilePath = logFilePath;
    this.jsonFilePath = jsonFilePath;
  }

  private getBaseDir(): string {
    return path.dirname(fileURLToPath(import.meta.url));
  }

  private getTimestamp(): string {
    return new Date().toLocaleString();
  }

  private formatMessage(level: number, message: string): string {
    const levelName = Object.keys(Logger.LEVELS).find(
      key => Logger.LEVELS[key as keyof typeof Logger.LEVELS] === level
    ) || 'UNKNOWN';

    const colorFunc = levelName === 'DEBUG' ? chalk.blue :
                      levelName === 'INFO' ? chalk.green :
                      levelName === 'WARN' ? chalk.yellow :
                      levelName === 'ERROR' ? chalk.red :
                      chalk.reset;

    return `[${this.getTimestamp()}] ${colorFunc(`[${levelName}]`)} - ${message}\n`;
  }

  private log(level: number, message: string) {
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

  private appendToJsonFile(level: number, message: string) {
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
        json = JSON.parse(data.toString());
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

  setLevel(level: number) {
    if (Object.values(Logger.LEVELS).includes(level)) {
      this.level = level;
    } else {
      throw new Error('Invalid log level');
    }
  }
}
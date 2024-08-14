import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

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
    logFilePath: string = path.join(__dirname, 'app.log'),
    jsonFilePath: string = path.join(__dirname, 'app.json')
  ) {
    this.level = level;
    this.logFilePath = logFilePath;
    this.jsonFilePath = jsonFilePath;
  }

  private getTimestamp(): string {
    return new Date().toISOString();
  }

  private formatMessage(level: number, message: string): string {
    const levelName = Object.keys(Logger.LEVELS).find(key => Logger.LEVELS[key] === level) || 'UNKNOWN';

    let colorFunc;
    switch (levelName) {
      case 'DEBUG':
        colorFunc = chalk.blue;
        break;
      case 'INFO':
        colorFunc = chalk.green;
        break;
      case 'WARN':
        colorFunc = chalk.yellow;
        break;
      case 'ERROR':
        colorFunc = chalk.red;
        break;
      default:
        colorFunc = chalk.reset;
    }

    return `${this.getTimestamp()} ${colorFunc(`[${levelName}]`)} ${message}`;
  }

  private log(level: number, message: string) {
    if (level >= this.level) {
      const formattedMessage = this.formatMessage(level, message);
      this.appendToFile(this.logFilePath, formattedMessage);
      this.appendToJsonFile(level, message);
    }
  }

  private appendToFile(filePath: string, message: string) {
    fs.appendFile(filePath, message + '\n', (err) => {
      if (err) console.error('Failed to write to log file:', err);
    });
  }

  private appendToJsonFile(level: number, message: string) {
    const logEntry = {
      timestamp: this.getTimestamp(),
      level: Object.keys(Logger.LEVELS).find(key => Logger.LEVELS[key] === level) || 'UNKNOWN',
      message
    };

    fs.readFile(this.jsonFilePath, (err, data) => {
      let json = [];
      if (!err) {
        json = JSON.parse(data.toString());
      }
      json.push(logEntry);
      fs.writeFile(this.jsonFilePath, JSON.stringify(json, null, 2), (err) => {
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
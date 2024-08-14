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
    level;
    logFilePath;
    jsonFilePath;
    constructor(level = Logger.LEVELS.INFO, logFilePath = path.join(__dirname, 'app.log'), jsonFilePath = path.join(__dirname, 'app.json')) {
        this.level = level;
        this.logFilePath = logFilePath;
        this.jsonFilePath = jsonFilePath;
    }
    getTimestamp() {
        return new Date().toISOString();
    }
    formatMessage(level, message) {
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
    log(level, message) {
        if (level >= this.level) {
            const formattedMessage = this.formatMessage(level, message);
            this.appendToFile(this.logFilePath, formattedMessage);
            this.appendToJsonFile(level, message);
        }
    }
    appendToFile(filePath, message) {
        fs.appendFile(filePath, message + '\n', (err) => {
            if (err)
                console.error('Failed to write to log file:', err);
        });
    }
    appendToJsonFile(level, message) {
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
                if (err)
                    console.error('Failed to write to JSON file:', err);
            });
        });
    }
    debug(message) {
        this.log(Logger.LEVELS.DEBUG, `[DEBUG]: ${message}`);
    }
    info(message) {
        this.log(Logger.LEVELS.INFO, `[INFO]: ${message}`);
    }
    warn(message) {
        this.log(Logger.LEVELS.WARN, `[WARN]: ${message}`);
    }
    error(message) {
        this.log(Logger.LEVELS.ERROR, `[ERROR]: ${message}`);
    }
    setLevel(level) {
        if (Object.values(Logger.LEVELS).includes(level)) {
            this.level = level;
        }
        else {
            throw new Error('Invalid log level');
        }
    }
}

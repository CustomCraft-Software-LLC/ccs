"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    constructor(level = Logger.LEVELS.INFO, logFilePath = path_1.default.join(__dirname, 'app.log'), jsonFilePath = path_1.default.join(__dirname, 'app.json')) {
        this.level = level;
        this.logFilePath = logFilePath;
        this.jsonFilePath = jsonFilePath;
    }
    getTimestamp() {
        return new Date().toISOString();
    }
    getLevelName(level) {
        return Object.keys(Logger.LEVELS).find(key => Logger.LEVELS[key] === level) || 'UNKNOWN';
    }
    formatMessage(level, message) {
        const levelName = this.getLevelName(level);
        const colorFunc = levelName === 'DEBUG' ? chalk_1.default.blue :
            levelName === 'INFO' ? chalk_1.default.green :
                levelName === 'WARN' ? chalk_1.default.yellow :
                    levelName === 'ERROR' ? chalk_1.default.red :
                        chalk_1.default.reset;
        return `[${this.getTimestamp()}] ${colorFunc(`[${levelName}]`)} - ${message}\n`;
    }
    log(level, message) {
        if (level >= this.level) {
            const formattedMessage = this.formatMessage(level, message);
            this.appendToFile(this.logFilePath, formattedMessage);
            this.appendToJsonFile(level, message);
        }
    }
    appendToFile(filePath, message) {
        fs_1.default.appendFile(filePath, message, err => {
            if (err)
                console.error('Failed to write to log file:', err);
        });
    }
    appendToJsonFile(level, message) {
        const logEntry = {
            timestamp: this.getTimestamp(),
            level: this.getLevelName(level),
            message
        };
        fs_1.default.readFile(this.jsonFilePath, (err, data) => {
            let json = [];
            if (!err) {
                json = JSON.parse(data.toString());
            }
            json.push(logEntry);
            fs_1.default.writeFile(this.jsonFilePath, JSON.stringify(json, null, 2), err => {
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
exports.Logger = Logger;
Logger.LEVELS = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3
};

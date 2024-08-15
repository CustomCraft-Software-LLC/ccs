"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../src/Logger");
const logger = new Logger_1.Logger(Logger_1.Logger.LEVELS.DEBUG);
// Log some messages
logger.debug('This is a debug message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
// Change log level to WARN
logger.setLevel(Logger_1.Logger.LEVELS.WARN);
// This will not be logged because current level is WARN
logger.info('This message will not be logged');

import { Logger } from '../src/Logger';

const logger = new Logger(Logger.LEVELS.DEBUG);

// Log some messages
logger.debug('This is a debug message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');

// Change log level to WARN
logger.setLevel(Logger.LEVELS.WARN);

// This will not be logged because current level is WARN
logger.info('This message will not be logged');
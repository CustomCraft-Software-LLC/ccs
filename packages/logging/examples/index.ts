import { Logger } from '../src/Logger';  // Adjust the import path as necessary

const logger = new Logger(Logger.LEVELS.DEBUG, '../logs/app.log', '../logs/app.json');

logger.debug('This is a debug message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
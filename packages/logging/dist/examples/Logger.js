import { Logger } from '../src/Logger'; // Adjust path as necessary
const logger = new Logger({
    filePath: './logs/app.log',
    format: (level, message) => `[CUSTOM FORMAT] [${level.toUpperCase()}] ${message}`,
});
// Logging with different levels
(async () => {
    await logger.info('This is an informational message');
    await logger.warn('This is a warning message');
    await logger.error('This is an error message');
})();

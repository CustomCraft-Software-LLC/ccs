import fs from 'fs';
import path from 'path';
import { Logger } from '../src/Logger';

describe('Logger Class', () => {
    const testLogDir = path.join(__dirname, '../logs_test');
    const testLogFilePath = path.join(testLogDir, 'app.log');
    const testJsonFilePath = path.join(testLogDir, 'app.json');

    beforeAll(() => {
        // Ensure the test directory exists
        if (!fs.existsSync(testLogDir)) {
            fs.mkdirSync(testLogDir);
        }
    });

    beforeEach(() => {
        // Ensure log files are created
        fs.writeFileSync(testLogFilePath, '');
        fs.writeFileSync(testJsonFilePath, '[]');
    });

    afterEach(() => {
        // Clean up log files after each test
        if (fs.existsSync(testLogFilePath)) {
            fs.unlinkSync(testLogFilePath);
        }
        if (fs.existsSync(testJsonFilePath)) {
            fs.unlinkSync(testJsonFilePath);
        }
    });

    test('should write debug log to file', () => {
        const logger = new Logger(Logger.LEVELS.DEBUG, 'UTC', testLogDir);
        logger.debug('This is a debug message');

        const logContents = fs.readFileSync(testLogFilePath, 'utf-8');
        expect(logContents).toContain('[DEBUG] - This is a debug message');
    });

    test('should write info log to file', () => {
        const logger = new Logger(Logger.LEVELS.INFO, 'UTC', testLogDir);
        logger.info('This is an info message');

        const logContents = fs.readFileSync(testLogFilePath, 'utf-8');
        expect(logContents).toContain('[INFO] - This is an info message');
    });

    test('should not write debug log when level is set to INFO', () => {
        const logger = new Logger(Logger.LEVELS.INFO, 'UTC', testLogDir);
        logger.debug('This is a debug message');

        const logContents = fs.readFileSync(testLogFilePath, 'utf-8');
        expect(logContents).toBe('');
    });

    test('should write log to JSON file', () => {
        const logger = new Logger(Logger.LEVELS.INFO, 'UTC', testLogDir);
        logger.info('This is an info message');

        const jsonContents = fs.readFileSync(testJsonFilePath, 'utf-8');
        const jsonLogs = JSON.parse(jsonContents);

        expect(jsonLogs[0].message).toBe('This is an info message');
        expect(jsonLogs[0].level).toBe('INFO');
    });

    test('should send logs within the specified date range', async () => {
        const logger = new Logger(Logger.LEVELS.INFO, 'UTC', testLogDir);
        logger.info('This is an info message');

        const startDate = new Date('2000-01-01');
        const endDate = new Date('2100-01-01');

        // Mock the fetch function
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ success: true }),
            })
        ) as jest.Mock;

        await logger.sendAPI('http://example.com/api', startDate, endDate);

        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});
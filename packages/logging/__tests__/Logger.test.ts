import fs from 'fs';
import path from 'path';
import { Logger } from '../src/Logger';

const mockFetch = jest.fn();

global.fetch = mockFetch;

describe('Logger', () => {
  const logFilePath = path.join(__dirname, '../logs/test.log');
  const jsonFilePath = path.join(__dirname, '../logs/test.json');

  beforeEach(() => {
    // Clear the log files before each test
    fs.writeFileSync(logFilePath, '');
    fs.writeFileSync(jsonFilePath, '[]');
    jest.clearAllMocks();
  });

  test('should log messages to text and JSON files', () => {
    const logger = new Logger(Logger.LEVELS.DEBUG, logFilePath, jsonFilePath);

    logger.debug('Debug message');
    logger.info('Info message');
    logger.warn('Warning message');
    logger.error('Error message');

    const logFileContent = fs.readFileSync(logFilePath, 'utf8');
    const jsonFileContent = fs.readFileSync(jsonFilePath, 'utf8');

    expect(logFileContent).toContain('Debug message');
    expect(logFileContent).toContain('Info message');
    expect(logFileContent).toContain('Warning message');
    expect(logFileContent).toContain('Error message');

    const jsonEntries = JSON.parse(jsonFileContent);
    expect(jsonEntries).toHaveLength(4);
    expect(jsonEntries[0].message).toBe('Debug message');
    expect(jsonEntries[1].message).toBe('Info message');
    expect(jsonEntries[2].message).toBe('Warning message');
    expect(jsonEntries[3].message).toBe('Error message');
  });

  test('should send logs to API', async () => {
    const logger = new Logger(Logger.LEVELS.DEBUG, logFilePath, jsonFilePath);

    // Add some logs
    logger.debug('Debug message for API');
    logger.info('Info message for API');

    // Mock the fetch response
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true })
    });

    const jsonFiles = [jsonFilePath];
    await logger.sendAPI('https://', jsonFiles);

    expect(mockFetch).toHaveBeenCalledWith('https://', expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }));

    expect(mockFetch).toHaveBeenCalledTimes(1);
    const fetchCall = mockFetch.mock.calls[0];
    const requestBody = JSON.parse(fetchCall[1].body);
    expect(requestBody).toHaveLength(2);
    expect(requestBody[0].message).toBe('Debug message for API');
    expect(requestBody[1].message).toBe('Info message for API');
  });
});
type LogLevel = 0 | 1 | 2 | 3;
declare class Logger {
    static LEVELS: {
        readonly DEBUG: 0;
        readonly INFO: 1;
        readonly WARN: 2;
        readonly ERROR: 3;
    };
    private level;
    private logFilePath;
    private jsonFilePath;
    private timezone;
    /**
     * Initializes the Logger instance with specified log level, timezone, and directory.
     * @param {LogLevel} level - The minimum log level to be recorded.
     * @param {string} timezone - The timezone for timestamps.
     * @param {string} logDir - The directory where log files are stored.
     */
    constructor(level?: LogLevel, timezone?: string, logDir?: string);
    /**
     * Gets the current timestamp formatted according to the timezone.
     * @returns {string} The formatted timestamp.
     */
    private getTimestamp;
    /**
     * Converts a numeric log level to its string representation.
     * @param {LogLevel} level - The numeric log level.
     * @returns {string} The string representation of the log level.
     */
    private getLevelName;
    /**
     * Formats a log message with a timestamp, log level, and optional colorization.
     * @param {LogLevel} level - The numeric log level.
     * @param {string} message - The log message.
     * @param {boolean} color - Whether to colorize the message.
     * @returns {string} The formatted log message.
     */
    private formatMessage;
    /**
     * Logs a message if its level meets or exceeds the configured log level.
     * @param {LogLevel} level - The numeric log level.
     * @param {string} message - The log message.
     */
    private log;
    /**
     * Appends a log message to a plain text file.
     * @param {string} filePath - The path to the log file.
     * @param {string} message - The log message.
     */
    private appendToFile;
    /**
     * Appends a log entry to a JSON file.
     * @param {LogLevel} level - The numeric log level.
     * @param {string} message - The log message.
     */
    private appendToJsonFile;
    /**
     * Sends filtered logs to an API endpoint.
     * @param {string} url - The API endpoint URL.
     * @param {Date} startDate - The start date for filtering logs.
     * @param {Date} endDate - The end date for filtering logs.
     */
    sendAPI(url: string, startDate: Date, endDate: Date): Promise<void>;
    debug(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    /**
     * Sets the minimum log level for the logger.
     * @param {LogLevel} level - The numeric log level to set.
     * @throws Will throw an error if an invalid log level is provided.
     */
    setLevel(level: LogLevel): void;
}
export default Logger;

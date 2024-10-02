/**
 * A class for managing logging to various destinations.
 */
declare class Log {
    private static fileName?;
    private static jsonFileName?;
    private static apiUrl?;
    /**
     * Configures the destinations for logging.
     * @param {Object} config - Configuration object for log destinations.
     * @param {string} [config.file] - Optional file path for plain text logs.
     * @param {string} [config.json] - Optional file path for JSON logs.
     * @param {string} [config.api] - Optional API URL for sending log entries.
     */
    static open(config: {
        file?: string;
        json?: string;
        api?: string;
    }): void;
    /**
     * Logs a message to all configured destinations.
     * @param {string} level - The log level (e.g., "INFO", "ERROR").
     * @param {string} message - The log message.
     */
    static log(level: string, message: string): Promise<void>;
}
export default Log;

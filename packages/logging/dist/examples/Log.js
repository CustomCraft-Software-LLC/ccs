import Log from '../src/Log';
// Configure and open the Log class
Log.open({
    file: '../logs/app.log', // Log file for plain text logs
    json: '../logs/app.json', // Log file for JSON logs
});
const multiLineMessage = `This is a multi-line message.
It contains several lines.
Each line will be prefixed with the timestamp and log level.`;
// Run the logging operations inside an async function
(async () => {
    // Log messages with different levels
    await Log.log('info', 'This is an informational message');
    await Log.log('warn', 'This is a warning message');
    await Log.log('error', 'This is an error message');
    // Logging a multi-line message
    await Log.log('info', multiLineMessage);
})();

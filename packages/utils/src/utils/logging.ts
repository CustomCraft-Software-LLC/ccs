import fs from 'fs';

/**
 * logGeneral - Logs the date and message stores it
 * @param {string} fileName 
 * @param {string} message 
 * @returns {void}
 */
export function logGeneral(fileName: string, message: string): void {
    fs.appendFile(fileName, `[${new Date().toISOString()}] - ${message}\n`, error => {
        if (error) 
            console.error('Error writing to access log:', error);
    });
}
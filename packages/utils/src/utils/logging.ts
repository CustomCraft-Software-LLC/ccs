import fs from 'fs';

export function logGeneral(fileName: string, message: string): void {
    fs.appendFile(fileName, `[${new Date().toISOString()}] - ${message}\n`, error => {
        if (error) 
            console.error('Error writing to access log:', error);
    });
}
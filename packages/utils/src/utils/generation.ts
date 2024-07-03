import crypto from 'crypto';

export const generatePassword = () => { 

}

/**
 * generateUUID - generate uuid string
 * @returns {string}
 */
export const generateUUID = () => { 
    return crypto.randomBytes(16).toString('hex');
}

/**
 * generateTimestamp - generates a timestamp
 * @returns {string}
 */
export const generateTimestamp = () => {
    return new Date().toISOString();
}

/**
 * generateRandomPhoneNumber - generates a random phone number
 * @returns {string}
 */
export const generateRandomPhoneNumber = () => {
    const randomNumber = () => Math.floor(Math.random() * 10);

    const areaCode = `${randomNumber()}${randomNumber()}${randomNumber()}`;
    const firstPart = `${randomNumber()}${randomNumber()}${randomNumber()}`;
    const secondPart = `${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;

    return `${areaCode}-${firstPart}-${secondPart}`;
}
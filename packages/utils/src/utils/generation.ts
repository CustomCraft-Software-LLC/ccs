import crypto from 'crypto';

export const generatePassword = () => { 

}

export const generateUUID = () => { 
    return crypto.randomBytes(16).toString('hex');
}

export const generateTimestamp = () => {
    return new Date().toISOString();
}

export const generateRandomPhoneNumber = () => {
    const randomNumber = () => Math.floor(Math.random() * 10);

    const areaCode = `${randomNumber()}${randomNumber()}${randomNumber()}`;
    const firstPart = `${randomNumber()}${randomNumber()}${randomNumber()}`;
    const secondPart = `${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;

    return `${areaCode}-${firstPart}-${secondPart}`;
}
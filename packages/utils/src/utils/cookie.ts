import Cookies from 'js-cookie';

/**
 * setCookie - set a cookie
 * @param {string} name 
 * @param {number} expDate 
 */
export const setCookie = (name : string, expDate : number) => {
    Cookies.set(name, 'true', { expires: expDate });
}

/**
 * removeCookie - remove a cookie
 * @param {string} name 
 */
export const removeCookie = (name : string) => {
    if(Cookies.get(name) !== undefined) {
        Cookies.remove(name);
    }
}

/**
 * doesCookieExist - check if a cookie exists
 * @param {string} name 
 * @returns {boolean}
 */
export const doesCookieExist = (name : string) => {
    const cookie = Cookies.get(name);
    return (cookie !== undefined ? true : false);
}
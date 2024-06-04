import Cookies from 'js-cookie';

export const setCookie = (name : string, expDate : number) => {
    Cookies.set(name, 'true', { expires: expDate });
}

export const removeCookie = (name : string) => {
    if(Cookies.get(name) !== undefined) {
        Cookies.remove(name);
    }
}

export const doesCookieExist = (name : string) => {
    const cookie = Cookies.get(name);
    return (cookie !== undefined ? true : false);
}
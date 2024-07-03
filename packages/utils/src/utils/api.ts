type header = Record<string, string>;

/**
 * isValidURL - checks if the URL is valid
 * @param {string} url 
 * @returns {boolean} 
 */
export const isValidURL = (url: string) : boolean => { 
    try { 
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * isValidEndpoint - checks if the endpoint is valid
 * @param {string} endpoint 
 * @returns 
 */
export const isValidEndpoint = (endpoint: string) : boolean => {
    return typeof endpoint === 'string' && endpoint.trim().length > 0;
}

/**
 * getRequest - GET request
 * @param {string} api_url 
 * @param {string} endpoint 
 * @param {header} headers 
 * @param {number} token 
 * @returns {Promise<any>}
 */
export const getRequest = async (api_url : string, endpoint : string, headers : header, token : number) => { 
    if(!isValidURL(api_url)) throw new Error('Invalid API URL');
    if(!isValidEndpoint(endpoint)) throw new Error('Invalid endpoint');

    const request = await fetch(`${api_url}/${endpoint}`, { 
        method: 'get',
        headers: headers,
    });

    if (!request.ok) {
        const error = await request.json();
        throw new Error(error || 'Fetch failed');
    }

    return request.json();
} 

/**
 * postRequest - POST request
 * @param {string} api_url 
 * @param {string} endpoint 
 * @param {JSON} data 
 * @param {header} headers 
 * @param {number} token 
 * @returns {Promise<any>}
 */
export const postRequest = async (api_url : string, endpoint : string, data : JSON, headers : header, token : number) => { 
    if(!isValidURL(api_url)) throw new Error('Invalid API URL');
    if(!isValidEndpoint(endpoint)) throw new Error('Invalid endpoint');

    const request = await fetch(`${api_url}/${endpoint}`, { 
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    });

    if (!request.ok) {
        const error = await request.json();
        throw new Error(error || 'Fetch failed');
    }

    return request.json();
} 

/**
 * putRequest - PUT request
 * @param {string} api_url 
 * @param {string} endpoint 
 * @param {JSON} data 
 * @param {header} headers 
 * @param {number} token 
 * @returns {Promise<any>}
 */
export const putRequest = async (api_url : string, endpoint : string, data : JSON, headers : header, token : number) => { 
    if(!isValidURL(api_url)) throw new Error('Invalid API URL');
    if(!isValidEndpoint(endpoint)) throw new Error('Invalid endpoint');

    const request = await fetch(`${api_url}/${endpoint}`, { 
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    });

    if (!request.ok) {
        const error = await request.json();
        throw new Error(error || 'Fetch failed');
    }

    return request.json();
} 

/**
 * putRequest - DELETE request
 * @param {string} api_url 
 * @param {string} endpoint 
 * @param {header} headers 
 * @param {number} token 
 * @returns {Promise<any>}
 */
export const deleteRequest = async (api_url : string, endpoint : string, headers : header, token : number) => { 
    if(!isValidURL(api_url)) throw new Error('Invalid API URL');
    if(!isValidEndpoint(endpoint)) throw new Error('Invalid endpoint');

    const request = await fetch(`${api_url}/${endpoint}`, { 
        method: 'POST',
        headers: headers,
    });

    if (!request.ok) {
        const error = await request.json();
        throw new Error(error || 'Fetch failed');
    }

    return request.json();
} 

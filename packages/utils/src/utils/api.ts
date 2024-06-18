type header = Record<string, string>;

const isValidURL = (url: string) : boolean => { 
    try { 
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

const isValidEndpoint = (endpoint: any) : boolean => {
    return typeof endpoint === 'string' && endpoint.trim().length > 0;
}

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

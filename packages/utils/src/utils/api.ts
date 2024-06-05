export const getRequest = async (api_url : string, endpoint : string, data : JSON, headers : JSON, token : number) => { 
    const request = await fetch(`${api_url}/${endpoint}`, { 
        method: 'get',
        headers: headers,
        body: JSON.stringify(data),
    });

    if (!request.ok) {
        throw new Error(await request.json().message || 'Fetch failed');
    }

    return request.json();
} 

export const postRequest = async (api_url : string, endpoint : string, data : JSON, headers : JSON, token : number) => { 
    const request = await fetch(`${api_url}/${endpoint}`, { 
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    });

    if (!request.ok) {
        throw new Error(await request.json().message || 'Fetch failed');
    }

    return request.json();
} 

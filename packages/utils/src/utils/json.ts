/**
 * parseJSON - parse JSON string into object
 * @param {string} json 
 * @returns {any}
 */
export const parseJSON = (json: string) : any => { 
    try { 
        return JSON.parse(json);
    } catch (error) { 
        console.error("Invalid JSON", error);
        return null;
    }
}
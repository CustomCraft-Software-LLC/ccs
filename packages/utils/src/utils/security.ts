export const sanitizeInput = (input : any) => {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
};
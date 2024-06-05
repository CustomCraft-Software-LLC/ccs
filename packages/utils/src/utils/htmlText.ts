import React from 'react';
import { Typography } from '@mui/material';
import { HTML_TAGS } from '../constants/html.ts';
import santizeHtml from 'sanitize-html';

export const countHTMLText = (text: string) => { 
    let count : number = 0;

    /* HTML_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                   'p', 'strong', 'em', 'b', 'i', 'u',
                   'a', 'blockquote', 'code', 'pre',
                   'del', 'ins', 'mark', 'small', 'sub',
                   'sup', 'time', 'q', 'cite', 'abbr',
                   'dfn', 'kbd', 'samp', 'var', 's'];
    */
    HTML_TAGS.forEach((tag : string) => { 
        const regex = new RegExp(`<${tag.toLowerCase()}[^>]*>.*?</${tag.toLowerCase()}>`, 'g');
        count += text.match(regex)?.length ?? 0;
    });

    return count;
}

export const splitHTMLText = (text: string) => {
    let splitText : string[] = [];
    if(typeof text === 'string' && text !== "") {
        splitText = text.split('\n');
        splitText = splitText.map((line : string) => line.trim());
    }
    return splitText;
}

export const convertTextIntoTypography = (text: string) => {
    for (let tag of HTML_TAGS) { 
        if(text.includes(`<${tag.toLowerCase()}>`)) { 
            text = text.replace(`<${tag.toLowerCase()}>`, `<Typography variant="${tag.toLowerCase()}">`);
            text = text.replace(`</${tag.toLowerCase()}>`, '</Typography>');
        }
    }
    return text;
}

/* text: <h1></h1>
         <h2></h2>
         <h3></h3>
         <h4></h4>
         <h5></h5>
         <h6></h6>
         <p></p>,
         etc...
         convert into Typography

    exampleText: ```<h1>Title</h1>
                    <h5>Table of Contents</h5>
                    <p>gfdgggh</p>
                    <p><strong>erys</strong></p>
                    <p><a>hello</a></p>```
    
    countHTMLText: 5
*/
export const formatText = (text: string) => { 
    let properText : string[] = [];

    // santize text
    text = santizeHtml(text);

    const textCountHtml = countHTMLText(text);

    // push text into properText
    properText = splitHTMLText(text);

    // convert text into typography
    properText = properText.map((text : string) => convertTextIntoTypography(text));
    // return properText
    return properText;
}
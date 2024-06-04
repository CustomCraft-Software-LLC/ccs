import React from 'react';
import { Typography } from '@mui/material';
import { HTML_TAGS } from '../constants/html.js';
import santizeHtml from 'sanitize-html';

export const countHTMLText = (text) => { 
    let count = 0;

    /* HTML_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                   'p', 'strong', 'em', 'b', 'i', 'u',
                   'a', 'blockquote', 'code', 'pre',
                   'del', 'ins', 'mark', 'small', 'sub',
                   'sup', 'time', 'q', 'cite', 'abbr',
                   'dfn', 'kbd', 'samp', 'var', 's'];
    */
    HTML_TAGS.forEach(tag => { 
        const regex = new RegExp(`<${tag.toLowerCase()}[^>]*>.*?</${tag.toLowerCase()}>`, 'g');
        if (text.match(regex)) {
            count += text.match(regex).length;
        }
    });

    return count;
}

export const splitHTMLText = (text) => {
    if(typeof text === 'string') {
        text = text.split('\n');
    }
    text = text.map(line => line.trim());
    return text;
}

export const convertTextIntoTypography = (text) => {
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
export const formatText = (text) => { 
    let properText = [];

    // santize text
    properText = santizeHtml(text);

    const textCountHtml = countHTMLText(properText);

    // push text into properText
    properText = splitHTMLText(properText);

    // convert text into typography
    properText = properText.map(text => convertTextIntoTypography(text));
    // return properText
    return properText;
}
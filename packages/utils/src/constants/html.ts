export const HTML_TAGS: string[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                                    'p', 'strong', 'em', 'b', 'i', 'u',
                                    'a', 'blockquote', 'code', 'pre',
                                    'del', 'ins', 'mark', 'small', 'sub',
                                    'sup', 'time', 'q', 'cite', 'abbr',
                                    'dfn', 'kbd', 'samp', 'var', 's'
                                   ];

export const checkTagExists = (tag: string): boolean => 
    { return HTML_TAGS.includes(tag); };
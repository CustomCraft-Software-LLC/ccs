import { formatText } from "../../packages/utils/src/utils";

describe('htmlText', () => { 
    const htmlText = `<h1>Title</h1>
    <h5>Table of Contents</h5>
    <p>hero</p>
    <p>erys</p>
    <p>hello</p>`;

    const convertedStr = ['<Typography variant="h1">Title</Typography>', 
                          '<Typography variant="h5">Table of Contents</Typography>', 
                          '<Typography variant="p">hero</Typography>', 
                          '<Typography variant="p">erys</Typography>', 
                          '<Typography variant="p">hello</Typography>'
                         ];

    test('formatText', () => { 
        expect(formatText(htmlText)).toStrictEqual(convertedStr);
    });
});
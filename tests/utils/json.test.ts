import { parseJSON } from '../../packages/utils/src/utils';

const json = {
    title: '',
    author: '',
    words: 250,
}

describe('parseJSON', () => { 
    test('parseJSON', () => {
        expect(parseJSON(JSON.stringify(json))).toBe(json);
    });
});
import * as fs from 'graceful-fs';
import { singleQuote } from '../common/singleQuote';
import { capitalize } from '../common/text/capitalize';

const data = JSON.parse(fs.readFileSync('src/schema/enums/enum-info.json').toString()) as Record<string, { key: string, text: string }[]>;

const types = Object.entries(data).map(([name, options]) => {
    const values = options.map(x => singleQuote(x.key)).join(' | ').concat(';');
    return ['export type' ,capitalize(name), '=', values].join(' ');
}).join('\n');

console.log(types);
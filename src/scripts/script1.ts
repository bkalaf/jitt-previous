import $masterEnum from './../schema/enums/enum-info.json';
import * as fs from 'graceful-fs';
import { capitalize } from '../common/text/capitalize';
import { doubleQuote } from '../common/doubleQuote';

const types = Object.keys($masterEnum);
console.log(types);

// fs.writeFileSync('enum-info.json', JSON.stringify($masterEnum, null, '\t'));

// CREATE TYPES
const typesData = Object.entries($masterEnum).map(([k, v]) => {
    return [k, v.map((v2) => v2.key)] as [string, string[]];
}).map(([name, items]) => `export type ${capitalize(name)} = ${items.map(doubleQuote).join(' | ').concat(';')}`).join('\n');

console.log(typesData);

// CREATE ATTRIBUTE PATHS
// const attributePaths = JSON.stringify(Object.fromEntries(types.map((t) => [t, ''])), null,'\t');

// fs.writeFileSync('attributePaths-working.json', attributePaths);

const apData = JSON.parse(fs.readFileSync('./../../attributePaths-working.json').toString()) as Record<string, string | [string, 'CheckboxValueControl' | 'TextValueControl' | 'toSelectValueControl']>;


function handleTrio(k: string, [v1, v2]: [string, 'CheckboxValueControl' | 'TextValueControl' | 'toSelectValueControl']) {
    switch (v2) {
        case 'CheckboxValueControl':
            return `{
                "key": "${k}",
                "text": "${v1}",
                "Component": ${v2}
            }`
        case 'TextValueControl':
            return `{
                "key": "${k}",
                "text": "${v1}",
                "Component": ${v2}
            }`
        case 'toSelectValueControl':
            return `{
                "key": "${v1}",
                "text": "${v1}",
                "Component": ${v2}("${k}")
            }`
    }
}

const apCodeText = Object.entries(apData)
    .map(([k, v]) => (typeof v === 'string' ? undefined : handleTrio(k, v)))
    .filter(x => x != null)
    .join(',\n');

console.log(`export const attributePaths = [
    ${apCodeText}
]`);
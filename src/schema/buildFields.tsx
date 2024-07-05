import fields from './fields.json';
import { isUpper } from '../common/text/isUpper';
import * as fs from 'graceful-fs';
import { doubleQuote } from '../common/doubleQuote';
import { singleQuote } from '../common/singleQuote';

const code = fields.map(({ func, header, importance, index, titleFunc, key, params, path, section }) => {
    return `{
        header: ${header == null || header === 'null' ? 'null' : singleQuote(header)},
        importance: ${importance ?? 'null'},
        index: ${index ?? 'null'},
        key: '${key}',
        params: ${params == null ? 'null' : typeof params === 'string' ? isUpper(params[0]) ? params : doubleQuote(params) : JSON.stringify(params, null, '\t')},
        getter: (sku: ISku) => ${path},
        func: ${func ?? 'null'},
        titleFunc: ${titleFunc ?? func ?? 'null'},
        section: ${doubleQuote(section) ?? 'null'}
    }`
}).join(',\n');

const text = `const fields = [
${code}
]`
fs.writeFileSync('generatorFields.tsx', text);
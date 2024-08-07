import { singleQuote } from '../common/singleQuote';

const items = [
    "mercari-promote",
    "mercari-import-brands",
    "mercari-import-shipping",
    "mercari-import-taxonomy",
    "mercari-import-hashtags",
    "mercari-import-custom-item-fields"
]

console.log(JSON.stringify(items.map(x => ({ key: x, text: x, aliases: [] })), null, '\t'))
console.log(items.map(x => singleQuote(x)).join(' | '))
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNarrative = exports.sortToKey = exports.generateTitle = void 0;
const material_1 = require("@mui/material");
const is_1 = require("../../../common/is");
const buildProperties_1 = require("./buildProperties");
const titleParts_1 = require("./titleParts");
function generateTitle(sku, maxLength = false, importance = 0) {
    const current = 54 - importance;
    const justTitles = buildProperties_1.properties.filter((x) => x.titleIndex != null && x.importance <= current);
    const order = justTitles
        .sort((l, r) => l.titleIndex < r.titleIndex ? -1
        : l.titleIndex > r.titleIndex ? 1
            : 0)
        .map((item) => {
        try {
            return item.titleFunc(item.extractor(sku));
        }
        catch (error) {
            console.info(`Error on ${item.importance}`);
            console.error(error);
            console.error(item);
        }
    })
        .filter(is_1.is.not.nil);
    const result = order.join(' ').split(' ').map(material_1.capitalize).join(' ').split('-').map(material_1.capitalize).join('-');
    console.info(`generateTitle`, result, result.length);
    process.stdout.write(`TITLE: `.concat(result.concat('\n')));
    if (maxLength) {
        if (result.length > 80) {
            return generateTitle(sku, maxLength, importance + 1);
        }
        return result;
    }
    return result;
}
exports.generateTitle = generateTitle;
function sortToKey(sorter, func) {
    function inner(todo, accum = {}) {
        if (todo.length === 0)
            return accum;
        const [head, ...tail] = todo;
        const key = sorter(head);
        if (key in accum) {
            const current = accum[key];
            const next = Object.assign(Object.assign({}, accum), { [key]: [...current, func ? func(head) : head] });
            return inner(tail, next);
        }
        const next = Object.assign(Object.assign({}, accum), { [key]: [func ? func(head) : head] });
        return inner(tail, next);
    }
    return inner;
}
exports.sortToKey = sortToKey;
function generateNarrative(sku, maxLength = false, importance = 0) {
    const current = 136 - importance;
    const justTitles = buildProperties_1.properties.filter((x) => x.importance <= current && x.section !== 'none');
    const order = justTitles
        .map((item) => {
        try {
            return [item.section, item.header, item.narrativeFunc(item.extractor(sku))];
        }
        catch (error) {
            console.error(error);
            console.error(item);
        }
    })
        .filter((item) => is_1.is.not.nil(item) && is_1.is.not.nil(item[2]));
    const $title = generateTitle(sku, false);
    const result = Object.assign({ title: $title }, sortToKey((x) => x[0], (x) => x.slice(1))(order));
    console.info(`generateTitle`, result);
    const { attributes, flags, measurements, specificiations, text, title, lists } = result;
    const sections = [
        title,
        attributes != null && attributes.length > 0 ? ['ATTRIBUTES', attributes.map(([key, value]) => [key, value].join(': ')).join(titleParts_1.char.newLine)].join(titleParts_1.char.newLine) : undefined,
        measurements != null && measurements.length > 0 ? ['MEASUREMENTS', measurements.map(([key, value]) => [key, value].join(': ')).join(titleParts_1.char.newLine)].join(titleParts_1.char.newLine) : undefined,
        specificiations != null && specificiations.length > 0 ? ['SPECIFICATIONS', specificiations.map(([key, value]) => [key, value].join(': ')).join(titleParts_1.char.newLine)].join(titleParts_1.char.newLine) : undefined,
        lists != null && lists.length > 0 ? lists.map(([key, value]) => [key.toUpperCase(), value].join(titleParts_1.char.newLine)).join(titleParts_1.char.newLine) : undefined,
        flags != null && flags.length > 0 ? flags.map((x) => titleParts_1.char.bullet.concat(x[1])).join(titleParts_1.char.newLine) : undefined,
        text != null && text.length > 0 ? titleParts_1.char.newLine.concat(text.map((x) => x[1]).join(titleParts_1.char.newLine)) : undefined
    ];
    console.info(`sections`, sections);
    const output = sections.filter(is_1.is.not.nil).map((x) => x.concat(titleParts_1.char.newLine)).join(titleParts_1.char.newLine);
    process.stdout.write(output.concat('\n'));
    if (maxLength) {
        if (output.length > 1000) {
            return generateNarrative(sku, maxLength, importance + 1);
        }
        return output;
    }
    return output;
}
exports.generateNarrative = generateNarrative;
//# sourceMappingURL=titleGenerator.js.map
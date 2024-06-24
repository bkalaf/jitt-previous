import { is } from '../../../common/is';
import { capitalize } from '../../../common/text';
import { ISku } from '../../../types';
import { properties } from './buildProperties';
import { char } from './titleParts';

export function generateTitle(sku: ISku, maxLength = false, importance = 0) {
    const current = 54 - importance;
    const justTitles = properties.filter((x) => x.titleIndex != null && x.importance <= current) as { titleIndex: number; extractor: (x: ISku) => any; titleFunc: (x: any) => string | undefined; importance: number }[];
    const order = justTitles
        .sort((l, r) =>
            l.titleIndex < r.titleIndex ? -1
            : l.titleIndex > r.titleIndex ? 1
            : 0
        )
        .map((item) => {
            try {
                return item.titleFunc(item.extractor(sku));
            } catch (error) {
                console.info(`Error on ${item.importance}`);
                console.error(error);
                console.error(item);
            }
        })
        .filter(is.not.nil) as string[];
    const result = order.join(' ').split(' ').map(capitalize).join(' ').split('-').map(capitalize).join('-');
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
export type Section = 'attributes' | 'lists' | 'flags' | 'none' | 'specificiations' | 'measurements' | 'text';
export function sortToKey<T, U>(sorter: (x: T) => string, func?: (x: T) => U) {
    function inner(todo: T[], accum: Record<string, U[]> = {}) {
        if (todo.length === 0) return accum;
        const [head, ...tail] = todo;
        const key = sorter(head);
        if (key in accum) {
            const current = accum[key];
            const next = { ...accum, [key]: [...current, func ? func(head) : (head as any as U)] };
            return inner(tail, next);
        }
        const next = { ...accum, [key]: [func ? func(head) : (head as any as U)] };
        return inner(tail, next);
    }
    return inner;
}
export function generateNarrative(sku: ISku, maxLength = false, importance = 0) {
    const current = 136 - importance;
    const justTitles = properties.filter((x) => x.importance <= current && x.section !== 'none') as {
        extractor: (x: ISku) => any;
        narrativeFunc: (x: any) => string | undefined;
        importance: number;
        header?: string;
        section: Section;
    }[];
    const order = justTitles.map((item) => {
        try {
            return [item.section, item.header, item.narrativeFunc(item.extractor(sku))] as [Section, string, string];
        } catch (error) {
            console.error(error);
            console.error(item);
        }
    }).filter((item) => is.not.nil(item) && is.not.nil(item![2])) as [Section, string, string][];
    const $title = generateTitle(sku, false);
    const result = {
        title: $title,
        ...(sortToKey<[Section, string, string], [string, string]>(
            (x) => x[0],
            (x) => x.slice(1) as [string, string]
        )(order) as Record<Section, [string, string][]>)
    };
    console.info(`generateTitle`, result);
    const { attributes, flags, measurements, specificiations, text, title, lists } = result;
    const sections = [
        title,
        attributes != null && attributes.length > 0 ? ['ATTRIBUTES', attributes.map(([key, value]) => [key, value].join(': ')).join(char.newLine)].join(char.newLine) : undefined,
        measurements != null && measurements.length > 0 ? ['MEASUREMENTS', measurements.map(([key, value]) => [key, value].join(': ')).join(char.newLine)].join(char.newLine) : undefined,
        specificiations != null && specificiations.length > 0 ? ['SPECIFICATIONS', specificiations.map(([key, value]) => [key, value].join(': ')).join(char.newLine)].join(char.newLine) : undefined,
        lists != null && lists.length > 0 ? lists.map(([key, value]) => [key.toUpperCase(), value].join(char.newLine)).join(char.newLine) : undefined,
        flags != null && flags.length > 0 ? flags.map((x) => char.bullet.concat(x[1])).join(char.newLine) : undefined,
        text != null && text.length > 0 ? char.newLine.concat(text.map((x) => x[1]).join(char.newLine)) : undefined
    ];
    console.info(`sections`, sections);
    const output = (sections.filter(is.not.nil) as string[]).map(x => x.concat(char.newLine)).join(char.newLine);
    process.stdout.write(output.concat('\n'));
    if (maxLength) {
        if (output.length > 1000) {
            return generateNarrative(sku, maxLength, importance + 1);
        }
        return output;
    }
    return output;
}

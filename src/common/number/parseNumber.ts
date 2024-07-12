import { getRange } from '../../schema/entity/getRange';
import { truncateAuto } from './truncateAuto';

export function parseNumber(str: string | number) {
    if (typeof str === 'number') return str;
    if (str.includes('.')) {
        if (str.endsWith('0') || str.endsWith('.')) {
            const newStr = str.slice(0, str.length - 1);
            return parseNumber(newStr);
        }
        return parseFloat(str);
    }
    return parseInt(str, 10);
}
export function getFractionInfo(denom: number)  {
    return Object.fromEntries(getRange(1, denom).map((n) => [truncateAuto((n / denom), 4), [n, denom] as [number, number]] as [string, [number, number]]))
}

const halves = getFractionInfo(2);
const thirds = getFractionInfo(3);
const fourths = getFractionInfo(4);
const fifths = getFractionInfo(5);
const sixths = getFractionInfo(6);
const sevenths = getFractionInfo(7);
const eights = getFractionInfo(8);
const ninths = getFractionInfo(9);
const tenths = getFractionInfo(10);
const elevenths = getFractionInfo(11);
const twelths = getFractionInfo(12);

const infos = {
    ...twelths,
    ...elevenths,
    ...tenths,
    ...ninths,
    ...eights,
    ...sevenths,
    ...sixths,
    ...fifths,
    ...fourths,
    ...thirds,
    ...halves
}

// console.log(JSON.stringify(infos, null, '\t'));

export function lookupFraction(decimal: string) {
    // console.log('lookupFraction', lookupFraction);
    const $decimal = parseFloat(decimal);
    const $infos = Object.entries(infos).map(([k, v]) => ({
        key: parseFloat(k),
        fraction: v.join('/')
    })).sort((a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0);
    const $max = Math.max(...$infos.filter(x => x.key <= $decimal).map(x => x.key));
    return $infos.find(x => x.key === $max)?.fraction;
}

// const fractionLookup = {

// }

// export function parseFractions(num: number) {
//     const decimal = num - Math.floor(num);
//     switch 
// }
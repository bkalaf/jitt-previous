import { getRange } from '../array/getRange';
import { fromCharCode } from './fromCharCode';
import { toCharCode } from './toCharCode';

export function removeNonAlphaNonNumberNonDash(str: string) {
    const range = getRange(32, 256);
    const numRange = getRange(toCharCode('0'), toCharCode('9'));
    const upperAlphaRange = getRange(toCharCode('A'), toCharCode('Z'));
    const lowerAlphaRange = getRange(toCharCode('a'), toCharCode('z'));
    const symbolRange = [toCharCode('-'), toCharCode('_')];
    const removeRange = range.filter((x) => ![...numRange, ...upperAlphaRange, ...lowerAlphaRange, ...symbolRange].includes(x));
    return removeRange
        .map((x) => fromCharCode(x))
        .map((x) => (s: string) => s.replaceAll(x, '-'))
        .reduce((pv, cv) => cv(pv), str);
}

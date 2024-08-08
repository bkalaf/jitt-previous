import { getRange } from '../array/getRange';
import { toCharCode } from './toCharCode';

export function isUpper(s: string) {
    const range = getRange(toCharCode('A'), toCharCode('Z'));
    return s != null && s.length > 0 ? range.includes(toCharCode(s)) : false;
}

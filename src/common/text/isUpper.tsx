import { toCharCode } from './toCharCode';
import { getRange } from '../../schema/entity/getRange';

export function isUpper(s: string) {
    const range = getRange(toCharCode('A'), toCharCode('Z'));
    return s != null && s.length > 0 ? range.includes(toCharCode(s)) : false;
}

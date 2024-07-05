import { removeNonAlphaNonNumberNonDash } from '../src/common/text/removeNonAlphaNonNumberNonDash';

export function toID(title: string) {    
    return removeNonAlphaNonNumberNonDash(title.toLowerCase());
}

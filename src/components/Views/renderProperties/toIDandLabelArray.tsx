import { camelToProper } from '../../../common/text/camelToProper';
import { isKebabCase } from './isKebabCase';
import { kebabToProper } from '../../../common/text/kebabToProper';
import { isCamelCase } from './isCamelCase';

export function toIDandLabelArray(arr: string[]) {
    return arr.map(text => ({ id: text, label: isCamelCase(text) ? camelToProper(text) : isKebabCase(text) ? kebabToProper(text) : text }));
}

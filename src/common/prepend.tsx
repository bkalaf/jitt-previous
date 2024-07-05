import { is } from './is';

export function prepend(left?: string) {
    return (right?: string) => [left, right].filter(is.not.nil).join('');
}
export function prependIgnore(left?: string) {
    return (right?: string) => (is.nil(left) || is.nil(right) ? undefined : [left, right].filter(is.not.nil).join(''));
}

import { is } from './is';

export function append(right?: string) {
    return (left?: string) => [left, right].filter(is.not.nil).join('');
}
export function appendIgnore(right?: string) {
    return (left?: string) => (right == null || left == null ? undefined : [left, right].filter(is.not.nil).join(''));
}

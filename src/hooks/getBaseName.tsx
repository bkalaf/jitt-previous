import { prepend } from '../common/prepend';

export function getBaseName(str: string) {
    return str.split('\\').reverse()[0];
}

export function getExtension(str: string) {
    return str != null && str.length > 0 ? prepend('.')(str.split('.').reverse()[0]) : null;
}
import { prepend } from '../prepend';

export function getExtension(str: string) {
    return str != null && str.length > 0 ? prepend('.')(str.split('.').reverse()[0]) : null;
}

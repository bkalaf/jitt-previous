import { Path } from 'react-hook-form';
import { curry } from '../text';

export function _objectMap<T, U>(func: (x: T) => U, obj: Record<string, T>) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
}

export const objectMap = <T, U>(func: (x: T) => U) => curry(_objectMap<T, U>)(func);
export function getProperty<T extends Record<string, any>, U = unknown>(name: Path<T>, obj: T): U | undefined {
    if (name.includes('.')) {
        const [head, ...tail] = name.split('.');
        return getProperty(tail.join('.'), obj[head] ?? {});
    }
    return obj[name];
}

export function setProperty<T extends Record<string, any>, U = unknown>(name: string, $obj: T, value: U) {
    const obj = { ...$obj };
    if (name.includes('.')) {
        const [head, ...tail] = name.split('.');
        (obj as Record<string, any>)[head] = setProperty<any, any>(tail.join('.') as any, getProperty(head as any, obj) ?? {}, value);
        return obj;
    }
    (obj as Record<string, any>)[name] = value;
    return obj;
}

// console.log(JSON.stringify(setProperty('a.b.c.d', {}, 215), null, '\t'))
// console.log(JSON.stringify(setProperty('a.b.c.d', { f: 2, a: { b: { e: 1, c: { d: 100 } } } }, 215), null, '\t'));

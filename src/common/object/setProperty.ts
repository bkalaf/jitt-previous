import { getProperty } from './getProperty';


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

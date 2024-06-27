import { Path } from 'react-hook-form';

export function getProperty<T extends Record<string, any>, U = unknown>(name: Path<T>, obj: T): U | undefined {
    if (name.includes('.')) {
        const [head, ...tail] = name.split('.');
        return getProperty(tail.join('.'), obj[head] ?? {});
    }
    return obj[name];
}

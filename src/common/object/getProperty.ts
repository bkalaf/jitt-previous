export function getProperty<T extends Record<string, any>, U = unknown>(name: string, obj: T): U | undefined {
    // console.log(name, JSON.stringify(obj, null, '\t'));
    if (name.includes('.')) {
        const [head, ...tail] = name.split('.');
        return getProperty(tail.join('.'), obj[head] ?? {});
    }
    return obj[name];
}

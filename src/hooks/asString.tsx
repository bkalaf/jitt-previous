
export function asString(x: unknown) {
    let stringValue: string | undefined;
    switch (typeof x) {
        case 'string':
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'symbol':
            stringValue = x.toString();
            break;
        case 'undefined':
            stringValue = 'null';
            break;
        case 'object':
            stringValue = JSON.stringify(x);
            break;
        case 'function':
            stringValue = 'function';
            break;
    }
    return stringValue ?? '';
}

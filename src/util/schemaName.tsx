export function schemaName(str: string) {
    return str.includes('?') ? str.replace('?', '') : str;
}

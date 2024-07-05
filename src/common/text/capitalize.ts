export function capitalize(str: string) {
    return str != null && str.length > 1 ? [str[0].toUpperCase(), str.slice(1)].join('') : str;
}

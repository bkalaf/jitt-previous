export function fromOptionsArray(arr: { text: string; key: string; aliases: string[] }[]) {
    return Object.fromEntries(arr.map((value) => [value.key, value]));
}

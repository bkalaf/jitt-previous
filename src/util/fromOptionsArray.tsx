export function fromOptionsArray(arr: { text: string; key: string }[]) {
    return Object.fromEntries(arr.map((value) => [value.key, value]));
}

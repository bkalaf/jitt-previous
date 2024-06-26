// export function normalizeOptions(rec: Record<string, string | { text: string; key: string }>) {
//     const toKey = (value: string) => (/[0-9]+/.test(value) ? parseInt(value, 10) : value);
//     return Object.entries(rec).map(([k, v]) => (typeof v === 'string' ? { key: toKey(k), text: v } : { key: toKey(v.key), text: v.text }));
// }


export function normalizeOptions(rec: Record<string, string | { text: string; key: string; }>) {
    return Object.entries(rec).map(([k, v]) => typeof v === 'string' ? { key: k, text: v } : v);
}

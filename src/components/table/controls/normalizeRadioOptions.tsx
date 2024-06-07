
export function normalizeRadioOptions(rec: Record<string, string | { text: string; key: string; }>) {
    return Object.entries(rec).map(([id, opt]) => ({ id, label: typeof opt === 'string' ? opt : opt.text }));
}


export function truncate(value?: string | number): number | undefined {
    if (value == null) return undefined;
    const trunced = typeof value === 'string' ? (value.includes('.') && (value.endsWith('0') || value.endsWith('.'))) ? truncate(value.slice(0, value.length - 1)) : value.includes('.') ? parseFloat(value) : parseInt(value, 10) : truncate(value.toString());
    return trunced;
}

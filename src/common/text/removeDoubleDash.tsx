export function removeDoubleDash(s: string): string {
    const result = s.replaceAll('--', '-');
    return result.includes('--') ? removeDoubleDash(result) : result;
}

export function isKebabCase(text: string) {
    if (text == null || text.length === 0) return false;
    return /[-]/.test(text);
}

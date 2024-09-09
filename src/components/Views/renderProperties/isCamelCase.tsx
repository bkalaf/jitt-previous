export function isCamelCase(text: string) {
    if (text == null || text.length === 0) return false;
    return /[A-Z]/.test(text);
}

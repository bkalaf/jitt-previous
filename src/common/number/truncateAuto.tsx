export function truncateAuto(value?: number) {
    function inner(strValue: string) {
        if (strValue.endsWith('.')) return strValue.substring(0, strValue.length - 1);
        if (strValue.endsWith('0')) return inner(strValue.substring(0, strValue.length - 1));
        return strValue;
    }
    if (value == null) return '';
    const str = value.toFixed(5);
    return inner(str);
}

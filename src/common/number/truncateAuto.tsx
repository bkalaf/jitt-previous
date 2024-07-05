export function truncateAuto(value?: number | string, precision = 4) {
    function inner(strValue: string): string {
        if (strValue.endsWith('.')) return strValue.substring(0, strValue.length - 1);
        if (strValue.endsWith('0')) return strValue.includes('.') ? inner(strValue.substring(0, strValue.length - 1)) : strValue;
        return strValue;
    }
    if (value == null) return '';
    const str = typeof value === 'number' ? value.toString() : value;
    const [integer, decimal] = inner(str).split('.') as [string] | [string, string];
    return [integer, decimal?.slice(0, precision)].filter((x) => x != null).join('.');
}

// console.log(truncateAuto(1.43100))
// console.log(truncateAuto("1.43100"));
// console.log(truncateAuto(1.431, 2));
// console.log(truncateAuto('1.43100', 2));
// console.log(truncateAuto(1.43993));
// console.log(truncateAuto('1.43993'));
// console.log(truncateAuto(1.43993, 2));
// console.log(truncateAuto('1.43993', 2));
// console.log(truncateAuto(101));
// console.log(truncateAuto('101'));
// console.log(truncateAuto(101, 2));
// console.log(truncateAuto('101', 2));
// console.log(truncateAuto(1));
// console.log(truncateAuto('1'));
// console.log(truncateAuto(1, 2));
// console.log(truncateAuto('1', 2));

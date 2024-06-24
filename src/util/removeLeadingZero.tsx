export function removeLeadingZeros(num: string) {
    if (num.startsWith('0')) {
        return removeLeadingZeros(num.slice(1));
    }
    return num;
}
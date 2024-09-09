import dayjs from 'dayjs';

// const result = Object.entries($graph).map(([k, v]) => Object.fromEntries(handleNodeValue(k, v as any)));
// console.log(result, null, '\t');
export function daysPast(num: number) {
    const now = new Date(Date.now());
    const djs = dayjs(now);
    return djs.subtract(num, 'day').toDate();
}

export function inPastNDays(num: number) {
    return (date: Date) => daysPast(num) < date
}

console.log(daysPast(1) < new Date(Date.now()));
console.log(inPastNDays(1)(new Date(Date.now())));

console.log(inPastNDays(7)(new Date(Date.parse('2024-08-29T00:00:000Z'))))
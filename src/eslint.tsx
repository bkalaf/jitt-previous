import problems from './problems';
const counter = new Map<string, number>();

const codeValues = problems.map(x => {
    console.log(`value`, JSON.stringify(x, null, '\t'));
    return (x.code?.toString() ?? '' as string)
});
const keys = new Set<string>(...codeValues);

console.log(`codeValues: ${codeValues.length}`);
console.log(`keys: ${keys.size}`);

Array.from(keys.values()).forEach(key => counter.set(key, 0));

codeValues.forEach(key => {
    const current = counter.get(key) ?? 0;
    counter.set(key, current + 1);
});

console.log(JSON.stringify(Object.fromEntries(counter.entries()), null, '\t'))
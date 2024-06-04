// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path=".\..\..\\global.d.ts" />
export function joinText(middle: string) {
    return (left: string, right: string) => [left, middle, right].join('');
}

export const concatText = joinText('');

export function flip<T, U, V>(func: (left: T, right: U) => V) {
    return (right: U, left: T) => func(left, right);
}

export function curry<TFunc extends (...args: any[]) => any>(func: TFunc) {
    return (x: Parameters<TFunc>[0]): (...args: Tail<Parameters<TFunc>>) => ReturnType<TFunc> => {
        const next = func.bind(null, x);
        return next.length === 0 ? next() : curry(next);
    }
}
export const appendText = curry(flip(concatText));

export function capitalize(str: string) {
    return [str[0].toUpperCase(), str.slice(1)].join('');
}
export function decapitalize(str: string) {
    return [str[0].toLowerCase(), str.slice(1)].join('');
}

function _splitWhen(predicate: Predicate<string>, str: string): string[] {
    function inner(todo: string[], accum: string[][] = [], current: string[] = []): string[][] {
        if (todo.length === 0) return [...accum, current];
        const [head, ...tail] = todo;
        return predicate(head) ? inner(tail, [...accum, current], [head]) : inner(tail, accum, [...current, head])
    }
    return inner(str.split('')).map(x => x.join(''));
}
export const splitWhen = curry(_splitWhen);
export function camelToProper(str: string) {
    return splitWhen((x) => /[A-Z]/.test(x))(str).map(capitalize).join(' ');
}
export function camelToKebab(str: string) {
    return splitWhen((x) => /[A-Z]/.test(x))(str).map(x => x.toLowerCase()).join('-');
}


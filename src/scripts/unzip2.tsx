
export function unzip2<T, U>(arr: [T, U][], accumT: T[] = [], accumU: U[] = []): [T[], U[]] {
    if (arr.length === 0) {
        return [accumT, accumU];
    }
    const [[headT, headU], ...tail] = arr;
    return unzip2(tail, [...accumT, headT], [...accumU, headU]);
}

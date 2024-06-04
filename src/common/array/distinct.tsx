import { BSON } from 'realm';

export function distinctBy<T>(comparator: (left: T, right: T) => boolean, arr: T[], accum: T[] = []): T[] {
    if (arr.length === 0) return accum;
    const [head, ...tail] = arr;
    return accum.some((x) => comparator(x, head)) ? distinct(tail, accum) : distinct(tail, [...accum, head]);
}
export function distinct<T>(arr: T[], accum: T[] = []): T[] {
    const func = (x: T, y: T) => x === y;
    return distinctBy(func, arr, accum);
}

export const distinctByOID = function <T extends { _id: BSON.ObjectId }>(arr: T[]) {
    return distinctBy<T>((x: T, y: T) => x._id.toHexString() === y._id.toHexString(), arr);
};

export const distinctByString = function(arr: string[]) {
    return distinctBy((x: string, y: string) => x.localeCompare(y) === 0, arr);
}
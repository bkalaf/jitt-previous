"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinctByString = exports.distinctByOID = exports.distinct = exports.distinctBy = void 0;
function distinctBy(comparator, arr, accum = []) {
    if (arr.length === 0)
        return accum;
    const [head, ...tail] = arr;
    return accum.some((x) => comparator(x, head)) ? distinct(tail, accum) : distinct(tail, [...accum, head]);
}
exports.distinctBy = distinctBy;
function distinct(arr, accum = []) {
    const func = (x, y) => x === y;
    return distinctBy(func, arr, accum);
}
exports.distinct = distinct;
const distinctByOID = function (arr) {
    return distinctBy((x, y) => x._id.toHexString() === y._id.toHexString(), arr);
};
exports.distinctByOID = distinctByOID;
const distinctByString = function (arr) {
    return distinctBy((x, y) => x.localeCompare(y) === 0, arr);
};
exports.distinctByString = distinctByString;
//# sourceMappingURL=distinct.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partitionBy = void 0;
function partitionBy(predicate, arr) {
    function inner(todo, trues = [], falses = []) {
        if (todo.length === 0)
            return [trues, falses];
        const [head, ...tail] = todo;
        return predicate(head) ? inner(tail, [...trues, head], falses) : inner(tail, trues, [...falses, head]);
    }
    return inner(arr);
}
exports.partitionBy = partitionBy;
//# sourceMappingURL=partitionBy.js.map
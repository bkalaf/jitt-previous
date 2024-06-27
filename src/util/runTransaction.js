"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTransaction = void 0;
function runTransaction(realm, func) {
    if (realm.isInTransaction) {
        return func();
    }
    let result;
    realm.write(() => {
        result = func();
    });
    return result;
}
exports.runTransaction = runTransaction;
//# sourceMappingURL=runTransaction.js.map
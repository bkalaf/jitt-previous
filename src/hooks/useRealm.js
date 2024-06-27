"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRealm = void 0;
const useContxt_1 = require("./useContxt");
const RealmContext_1 = require("../contexts/RealmContext");
function useRealm() {
    return (0, useContxt_1.useContxt)('RealmContext', RealmContext_1.RealmContext);
}
exports.useRealm = useRealm;
//# sourceMappingURL=useRealm.js.map
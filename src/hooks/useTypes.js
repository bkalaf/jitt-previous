"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTypes = void 0;
const useLocalRealm_1 = require("./useLocalRealm");
function useTypes() {
    const realm = (0, useLocalRealm_1.useLocalRealm)();
    return realm.schema;
}
exports.useTypes = useTypes;
//# sourceMappingURL=useTypes.js.map
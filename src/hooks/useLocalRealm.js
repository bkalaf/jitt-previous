"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalRealm = void 0;
const useRealm_1 = require("./useRealm");
function useLocalRealm() {
    // console.log('useLocalRealm');
    const { realmResource } = (0, useRealm_1.useRealm)();
    const db = realmResource();
    if (db == null)
        throw new Error('no db');
    return db;
}
exports.useLocalRealm = useLocalRealm;
//# sourceMappingURL=useLocalRealm.js.map
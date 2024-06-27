"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnv = void 0;
const useContxt_1 = require("./useContxt");
const EnvContext_1 = require("../contexts/EnvContext");
function useEnv() {
    return (0, useContxt_1.useContxt)('EnvContext', EnvContext_1.EnvContext);
}
exports.useEnv = useEnv;
//# sourceMappingURL=useEnv.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProvideForagerContext = exports.useForager = exports.ForagerContext = void 0;
const react_1 = require("react");
const useContxt_1 = require("../hooks/useContxt");
const localforage_1 = __importDefault(require("localforage"));
exports.ForagerContext = (0, react_1.createContext)(undefined);
function useForager() {
    return (0, useContxt_1.useContxt)('ForageContext', exports.ForagerContext);
}
exports.useForager = useForager;
function useProvideForagerContext() {
    const forager = (0, react_1.useMemo)(() => localforage_1.default.createInstance({ name: 'realm', storeName: 'jitt' }), []);
    return (0, react_1.useMemo)(() => ({ forager }), [forager]);
}
exports.useProvideForagerContext = useProvideForagerContext;
//# sourceMappingURL=ForagerContext.js.map
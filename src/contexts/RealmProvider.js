"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealmProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const RealmContext_1 = require("./RealmContext");
const react_1 = __importDefault(require("react"));
const useProvideRealmPromiseContext_1 = require("../hooks/useProvideRealmPromiseContext");
function RealmProvider({ children }) {
    const value = (0, useProvideRealmPromiseContext_1.useProvideRealmPromiseContext)();
    return ((0, jsx_runtime_1.jsx)(react_1.default.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading..." }), children: (0, jsx_runtime_1.jsx)(RealmContext_1.RealmContext.Provider, { value: value, children: children }) }));
}
exports.RealmProvider = RealmProvider;
//# sourceMappingURL=RealmProvider.js.map
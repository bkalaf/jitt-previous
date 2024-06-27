"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemContextProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useProvideFileSystemContext_1 = require("../hooks/useProvideFileSystemContext");
const FileSystemContext_1 = require("./FileSystemContext");
function FileSystemContextProvider({ children }) {
    const value = (0, useProvideFileSystemContext_1.useProvideFileSystemContext)();
    return (0, jsx_runtime_1.jsx)(FileSystemContext_1.FileSystemContext.Provider, { value: value, children: children });
}
exports.FileSystemContextProvider = FileSystemContextProvider;
//# sourceMappingURL=FileSystemContextProvider.js.map
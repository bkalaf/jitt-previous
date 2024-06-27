"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFileSystem = void 0;
const useContxt_1 = require("./useContxt");
const FileSystemContext_1 = require("../contexts/FileSystemContext");
// console.log('normalize', path.normalize('C:\\Users\\bobby\\OneDrive\\Desktop\\Code\\jitt\\package.json'))
// console.log('resolve', path.resolve('C:\\Users\\bobby\\OneDrive\\Desktop\\Code\\jitt\\package.json'))
// console.log('parse', path.parse('C:/Users/bobby/OneDrive/Desktop/Code/jitt/package.json'))
function useFileSystem() {
    return (0, useContxt_1.useContxt)('FileSystemContext', FileSystemContext_1.FileSystemContext);
}
exports.useFileSystem = useFileSystem;
//# sourceMappingURL=useFileSystem.js.map
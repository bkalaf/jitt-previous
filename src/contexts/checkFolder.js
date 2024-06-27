"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyFolder = exports.checkFolder = exports.checkPath = void 0;
const fs = __importStar(require("graceful-fs"));
const path = __importStar(require("path"));
function checkPath(fullpath, isFile = false) {
    const parts = fullpath.split('\\').slice(0, isFile ? fullpath.split('\\').length - 1 : fullpath.split('\\').length);
    console.log('checkPath', parts);
    if (fs.existsSync(parts.join('\\')))
        return;
    checkPath(parts.slice(0, parts.length - 1).join('\\'), false);
    fs.mkdirSync(parts.join('\\'));
    return;
}
exports.checkPath = checkPath;
function checkFolder(folder) {
    return __awaiter(this, void 0, void 0, function* () {
        const segments = folder.split('\\').slice(1);
        const segment = [folder.split('\\')[0], ...segments].join('\\');
        if (fs.existsSync(segment)) {
            return Promise.resolve(true);
        }
        const parts = ['C:', ...segments];
        const next = parts.slice(0, parts.length - 1).join('\\');
        if (yield checkFolder(next))
            return Promise.resolve(true);
        fs.mkdirSync(next);
        return Promise.resolve(true);
    });
}
exports.checkFolder = checkFolder;
function verifyFolder(folder) {
    function inner(volume, ...parts) {
        const current = [volume, ...parts].join('\\');
        console.log(`current`, current);
        if (fs.existsSync(current))
            return;
        inner(volume, ...parts.slice(0, parts.length - 1));
        console.log(`making [${current}]`);
        fs.mkdirSync(current);
    }
    const dir = path.dirname(folder);
    console.log(`dir`, dir);
    const [volume, ...segments] = dir.split('\\');
    console.log(`volume/segments`, volume, segments);
    inner(volume, ...segments);
}
exports.verifyFolder = verifyFolder;
// verifyFolder('C:\\Users\\bobby\\OneDrive\\Desktop\\test\\test\\comma.csv');
//# sourceMappingURL=checkFolder.js.map
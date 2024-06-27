"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromDepth = void 0;
function fromDepth(depth) {
    // const char = '▸_'
    switch (depth) {
        case 1:
            return `before:content-["▸_"]`;
        case 2:
            return `before:content-["▸_▸_"]`;
        case 3:
            return `before:content-["▸_▸_▸_"]`;
        case 4:
            return `before:content-["▸_▸_▸_▸_"]`;
        case 5:
            return `before:content-["▸_▸_▸_▸_▸_"]`;
        case 6:
            return `before:content-["▸_▸_▸_▸_▸_▸_"]`;
        case 7:
            return `before:content-["▸_▸_▸_▸_▸_▸_▸_"]`;
        case 8:
            return `before:content-["▸_▸_▸_▸_▸_▸_▸_▸_"]`;
        case 9:
            return `before:content-["▸_▸_▸_▸_▸_▸_▸_▸_▸_"]`;
        case 10:
            return `before:content-["▸_▸_▸_▸_▸_▸_▸_▸_▸_▸_"]`;
        default:
            return `before:content-["▸_▸_▸_▸_▸_▸_▸_▸_▸_▸_"`;
    }
}
exports.fromDepth = fromDepth;
//# sourceMappingURL=fromDepth.js.map
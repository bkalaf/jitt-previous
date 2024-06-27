"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCaption = void 0;
const is_1 = require("../common/is");
function generateCaption(facing) {
    const { x, y, z, pov } = facing;
    const text = [[y, z, x].filter(is_1.is.not.nil).join('-'), ...Array.from(pov).sort()].filter(is_1.is.not.nil).join('; ');
    return text;
}
exports.generateCaption = generateCaption;
//# sourceMappingURL=generateCaption.js.map
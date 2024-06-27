"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flip = void 0;
function flip(func) {
    return (right, left) => func(left, right);
}
exports.flip = flip;
//# sourceMappingURL=flip.js.map
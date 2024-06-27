"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisuallyHiddenInput = void 0;
const material_1 = require("@mui/material");
exports.VisuallyHiddenInput = (0, material_1.styled)('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
});
//# sourceMappingURL=VisuallyHiddenInput.js.map
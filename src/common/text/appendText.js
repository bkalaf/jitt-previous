"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendText = void 0;
const concatText_1 = require("./concatText");
const curry_1 = require("./curry");
const flip_1 = require("./flip");
exports.appendText = (0, curry_1.curry)((0, flip_1.flip)(concatText_1.concatText));
//# sourceMappingURL=appendText.js.map
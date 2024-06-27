"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectMap = void 0;
const curry_1 = require("../text/curry");
const baseObjectMap_1 = require("./baseObjectMap");
const objectMap = (func) => (0, curry_1.curry)((baseObjectMap_1.baseObjectMap))(func);
exports.objectMap = objectMap;
//# sourceMappingURL=objectMap.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converted = void 0;
const laundryCare_1 = require("../laundryCare");
// eslint-disable-next-line @typescript-eslint/ban-types
const converted = (section) => (key) => laundryCare_1.ClothingCareMap[section][key].text;
exports.converted = converted;
//# sourceMappingURL=colDBList.js.map
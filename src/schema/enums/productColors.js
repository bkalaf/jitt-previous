"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productColors = void 0;
const mercariColors_1 = require("./mercariColors");
// export const productColors: Record<keyof typeof aliasColors, ExtendedEnumInfo> = Object.fromEntries(Object.entries(aliasColors).map(([key, alias]) => {
//     const { selector, classes } = mercariColors[alias as keyof typeof mercariColors];
//     return [key, {
//         text: key,
//         key,
//         classes,
//         selector
//     }] as [string, ExtendedEnumInfo];
// })) as Record<keyof typeof aliasColors, ExtendedEnumInfo>;
const colorsMap = Object.fromEntries(Object.entries(mercariColors_1.mercariColors).map(([k, v]) => [k, Object.assign({ key: k, text: k }, v)]));
exports.productColors = Object.assign(Object.assign({}, colorsMap), Object.fromEntries(Object.entries(mercariColors_1.aliasColors).map(([k, v]) => [k, Object.assign(Object.assign({}, colorsMap[v]), { key: k })])));
console.log(exports.productColors);
//# sourceMappingURL=productColors.js.map
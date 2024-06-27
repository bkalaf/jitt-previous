"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function Panel(props) {
    const { Component, property, original, objectType } = props;
    console.info(`data`, original, property);
    const data = property ? original[property] : original !== null && original !== void 0 ? original : [];
    return (0, jsx_runtime_1.jsx)(Component, { data: data, original: original, objectType: objectType });
}
exports.Panel = Panel;
//# sourceMappingURL=Panel.js.map
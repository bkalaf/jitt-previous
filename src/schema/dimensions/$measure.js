"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$measure = exports.joinUOM = exports.toUOM = exports.divide = exports.multiply = exports.isDouble = void 0;
const truncateAuto_1 = require("../../common/number/truncateAuto");
const unicode_1 = __importDefault(require("./unicode"));
const simplifyUp_1 = require("../../util/simplifyUp");
const simplifyDown_1 = require("../../util/simplifyDown");
const isDouble = (value) => (0, truncateAuto_1.truncateAuto)(value, 2);
exports.isDouble = isDouble;
const multiply = (func) => (factor) => (num) => parseFloat(func(factor * num));
exports.multiply = multiply;
const divide = (func) => (factor) => (num) => parseFloat(func(num / factor));
exports.divide = divide;
const toUOM = (origUOM, targetUOM, func) => (n) => ({
    original: n,
    originalUOM: origUOM,
    target: func(n),
    targetUOM: targetUOM
});
exports.toUOM = toUOM;
const joinUOM = (value, uom) => (0, truncateAuto_1.truncateAuto)(value, 2) === '0' ? undefined : [((0, truncateAuto_1.truncateAuto)(value, 2), uom)].join('');
exports.joinUOM = joinUOM;
exports.$measure = {
    convert: {
        length: (0, exports.toUOM)(unicode_1.default.INCH, 'cm', (0, exports.multiply)(exports.isDouble)(2.54)),
        distance: (0, exports.toUOM)('ft', 'm', (0, exports.divide)(exports.isDouble)(3.2808399)),
        weight: (0, exports.toUOM)('g', 'lb', (0, exports.divide)(exports.isDouble)(453.59237)),
        caliperSize: (0, exports.toUOM)('mm', unicode_1.default.INCH, (0, exports.divide)(exports.isDouble)(25.4)),
        density: (0, exports.toUOM)('g/cm'.concat(unicode_1.default.SUPERSCRIPT3), 'lb/floz', (0, exports.divide)(exports.isDouble)(15.338))
    },
    simplify: {
        weight: (n) => (0, simplifyDown_1.simplifyDown)(16, 'oz', true)(n, 'lb'),
        duration: (n) => (0, simplifyUp_1.simplifyUp)(60, 'm')(n, 's'),
        runtime: (n) => (0, simplifyUp_1.simplifyUp)(60, 'h')(n, 'm')
    }
};
//# sourceMappingURL=$measure.js.map
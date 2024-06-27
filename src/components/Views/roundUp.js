"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundUp = exports._roundUp = void 0;
const curry_1 = require("../../common/text/curry");
function _roundUp(nearestStep, value) {
    // console.log();
    // console.log('ROUND UP')
    // console.log(`nearest: ${nearestStep} value: ${value}`);
    // console.log(value % nearestStep, nearestStep - (value % nearestStep))
    return value % nearestStep === 0 ? value : value + (nearestStep - (value % nearestStep));
}
exports._roundUp = _roundUp;
exports.roundUp = (0, curry_1.curry)(_roundUp);
//# sourceMappingURL=roundUp.js.map
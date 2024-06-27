"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStreetOnly = void 0;
function getStreetOnly(address) {
    var _a;
    return (_a = address === null || address === void 0 ? void 0 : address.mailing1) === null || _a === void 0 ? void 0 : _a.split(' ').slice(1).join(' ');
}
exports.getStreetOnly = getStreetOnly;
//# sourceMappingURL=getStreetOnly.js.map
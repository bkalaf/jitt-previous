"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityState = void 0;
function getCityState(address) {
    return address ? [address === null || address === void 0 ? void 0 : address.city, address === null || address === void 0 ? void 0 : address.province].filter((x) => x != null).join(', ') : undefined;
}
exports.getCityState = getCityState;
//# sourceMappingURL=getCityState.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppConfigPathed = void 0;
const remote_1 = require("@electron/remote");
function getAppConfigPathed(...fn) {
    return [remote_1.app.getPath('appData'), 'jitt', ...fn].join('\\');
}
exports.getAppConfigPathed = getAppConfigPathed;
//# sourceMappingURL=getAppConfigPathed.js.map
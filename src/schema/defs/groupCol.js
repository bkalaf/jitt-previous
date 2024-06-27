"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupCol = void 0;
const mapEmbed_1 = require("../../util/mapEmbed");
const groupProps_1 = require("../groupProps");
const toID_1 = require("../toID");
function groupCol(helper, header, columns, propertyName, bgColor, textColor) {
    return function (...dependencies) {
        return helper.group(Object.assign({ header, id: (0, toID_1.toID)(header), columns: (0, mapEmbed_1.mapEmbed)(columns, propertyName, ...dependencies) }, (0, groupProps_1.groupProps)(bgColor, textColor)));
    };
}
exports.groupCol = groupCol;
//# sourceMappingURL=groupCol.js.map
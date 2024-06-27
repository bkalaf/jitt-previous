"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupProps = void 0;
const _className_1 = require("../util/$className");
function groupProps(bgColor, textColor) {
    const { className: cn } = (0, _className_1.$className)({ className: 'single-header:bg-transparent single-header:text-black grouped-header:shadow-inner grouped-header:shadow-black' }, {}, bgColor, textColor);
    return {
        muiTableHeadCellProps: {
            className: cn
        }
    };
}
exports.groupProps = groupProps;
//# sourceMappingURL=groupProps.js.map
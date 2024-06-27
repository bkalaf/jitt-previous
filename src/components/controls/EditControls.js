"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditControls = void 0;
const createEditComponent_1 = require("./createEditComponent");
const Grid_1 = require("../../hooks/Grid");
function EditControls(props) {
    return props.columns.map((0, createEditComponent_1.createEditComponent)(Grid_1.Item));
}
exports.EditControls = EditControls;
//# sourceMappingURL=EditControls.js.map
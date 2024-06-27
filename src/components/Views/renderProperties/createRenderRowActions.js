"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRenderRowActions = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_react_table_1 = require("material-react-table");
const material_1 = require("@mui/material");
const useInvalidateCollection_1 = require("../../../hooks/useInvalidateCollection");
const IconBtn_1 = require("../../IconBtn");
const pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
const react_query_1 = require("@tanstack/react-query");
const useLocalRealm_1 = require("../../../hooks/useLocalRealm");
const useStopAndPrevent_1 = require("../../../hooks/useStopAndPrevent");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const expandButtonHW_1 = require("../expandButtonHW");
function createRenderRowActions() {
    return function RenderRowActions(props) {
        (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('RenderRowActions', props);
        const { table, row } = props;
        const invalidator = (0, useInvalidateCollection_1.useInvalidateCollection)();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onEditClick = (0, useStopAndPrevent_1.useStopAndPrevent)((ev) => table.setEditingRow((0, material_react_table_1.createRow)(table, row.original)));
        //  row.original.toJSON()
        const db = (0, useLocalRealm_1.useLocalRealm)();
        const { mutate } = (0, react_query_1.useMutation)({
            onSuccess: () => invalidator(),
            mutationFn: (value) => {
                db.delete(value);
                return Promise.resolve();
            }
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onDeleteClick = (0, useStopAndPrevent_1.useStopAndPrevent)((ev) => mutate(row.original));
        return ((0, jsx_runtime_1.jsxs)(material_1.Box, { className: 'flex flex-row flex-nowrap gap-x-1', children: [(0, jsx_runtime_1.jsx)(IconBtn_1.IconBtn, { icon: pro_solid_svg_icons_1.faPencilSquare, className: 'flex rounded-lg shadow-inner shadow-black', tooltip: 'Edit row', onClick: onEditClick, iconSize: 'lg', innerDim: expandButtonHW_1.iconSVGDim, outerDim: expandButtonHW_1.iconButtonDim, classes: { iconButton: 'bg-black', fontAwesomeIcon: 'text-red-500 bg-white' } }), (0, jsx_runtime_1.jsx)(IconBtn_1.IconBtn, { icon: pro_solid_svg_icons_1.faTrashCan, className: 'flex rounded-lg shadow-inner shadow-black', tooltip: 'Delete row', onClick: onDeleteClick, iconSize: 'lg', innerDim: expandButtonHW_1.iconSVGDim, outerDim: expandButtonHW_1.iconButtonDim, classes: { iconButton: 'bg-black', fontAwesomeIcon: 'bg-white text-emerald-600' } })] }));
    };
}
exports.createRenderRowActions = createRenderRowActions;
//# sourceMappingURL=createRenderRowActions.js.map
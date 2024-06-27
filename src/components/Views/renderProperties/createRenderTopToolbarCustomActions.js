"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRenderTopToolbarCustomActions = exports.useAnySelected = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_react_table_1 = require("material-react-table");
const material_1 = require("@mui/material");
const useInvalidateCollection_1 = require("../../../hooks/useInvalidateCollection");
const useUpdater_1 = require("../../../hooks/useUpdater");
const notistack_1 = require("notistack");
const useLocalRealm_1 = require("../../../hooks/useLocalRealm");
const useEffectiveCollection_1 = require("../../../hooks/useEffectiveCollection");
const useBarcodeGenerator_1 = require("../../../hooks/useBarcodeGenerator");
const react_1 = require("react");
const runTransaction_1 = require("../../../util/runTransaction");
const sku_1 = require("../../../schema/entity/sku");
const draft_1 = require("../../../schema/entity/draft");
const useToaster_1 = require("../../../hooks/useToaster");
function useAnySelected(table, negate = false) {
    return (table.getIsAllRowsSelected() || table.getIsSomeRowsSelected() ?
        negate ? false
            : true
        : false);
}
exports.useAnySelected = useAnySelected;
function createRenderTopToolbarCustomActions(init, resetSettings) {
    return function RenderTopToolbarCustomActions({ table }) {
        const route = (0, useEffectiveCollection_1.useEffectiveCollection)();
        const [hasUpdater, updater] = (0, useUpdater_1.useUpdater)();
        const db = (0, useLocalRealm_1.useLocalRealm)();
        const invalidate = (0, useInvalidateCollection_1.useInvalidateCollection)();
        const { enqueueSnackbar } = (0, notistack_1.useSnackbar)();
        const { nextBin, nextSku } = (0, useBarcodeGenerator_1.useBarcodeGenerator)();
        const noneSelected = useAnySelected(table, true);
        const onNextBarcode = (0, react_1.useCallback)(() => {
            const selected = table.getSelectedRowModel().rows.map((x) => x.original);
            const next = route === 'sku' ? nextSku : nextBin;
            const innerFunc = (item) => {
                if ('product' in item) {
                    item.addBarcode(next);
                    return;
                }
                item.addBarcode(next);
            };
            const func = () => {
                selected.map(innerFunc);
            };
            (0, runTransaction_1.runTransaction)(db, func);
            invalidate();
        }, [db, invalidate, nextBin, nextSku, route, table]);
        const onNewSku = (0, react_1.useCallback)(() => {
            const selected = table.getSelectedRowModel().rows.map((x) => x.original);
            const func = () => {
                selected.map((product) => sku_1.Sku.addFromProduct(product));
            };
            (0, runTransaction_1.runTransaction)(db, func);
        }, [db, table]);
        const { msg: draftCreatedMsg } = (0, useToaster_1.useToaster)((id) => `Draft created: ${id.toHexString()}`);
        const notOnlyOneSelected = !(table.getSelectedRowModel().rows.length === 1);
        const onNewDraft = (0, react_1.useCallback)(() => {
            const selected = table.getSelectedRowModel().rows.map((x) => x.original)[0];
            const { _id } = draft_1.Draft.createDraft(db, selected);
            draftCreatedMsg(_id);
        }, [db, draftCreatedMsg, table]);
        console.log('getSelectedRowModel', table.getSelectedRowModel());
        return ((0, jsx_runtime_1.jsxs)(material_1.Box, { className: 'flex gap-x-1', children: [(0, jsx_runtime_1.jsx)(material_1.Button, { color: 'secondary', variant: 'contained', onClick: resetSettings, children: "Reset" }), (0, jsx_runtime_1.jsx)(material_1.Button, { color: 'secondary', variant: 'contained', onClick: () => table.setCreatingRow((0, material_react_table_1.createRow)(table, init())), children: "Create" }), hasUpdater && ((0, jsx_runtime_1.jsx)(material_1.Button, { color: 'secondary', variant: 'contained', disabled: table.getSelectedRowModel().rows.length === 0, className: 'disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md', onClick: () => {
                        if (db == null)
                            throw new Error('no db');
                        const rowSelected = table.getSelectedRowModel().rows.map((x) => x.original);
                        const results = [];
                        for (const iterator of rowSelected) {
                            results.push(updater(iterator));
                        }
                        enqueueSnackbar(`Updated ${results.length} rows.`, { preventDuplicate: true, variant: 'success', TransitionComponent: material_1.Slide });
                        table.setRowSelection({});
                        invalidate();
                    }, children: "Update" })), ['sku', 'bin'].includes(route) && ((0, jsx_runtime_1.jsx)(material_1.Button, { color: 'secondary', variant: 'contained', onClick: onNextBarcode, disabled: noneSelected, className: 'disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md', children: "Add Barcode" })), route === 'product' && ((0, jsx_runtime_1.jsx)(material_1.Button, { color: 'secondary', variant: 'contained', onClick: onNewSku, disabled: noneSelected, className: 'disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md', children: "Add SKU" })), route === 'sku' && ((0, jsx_runtime_1.jsx)(material_1.Button, { color: 'secondary', variant: 'contained', onClick: onNewDraft, disabled: notOnlyOneSelected, className: 'disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md', children: "Add Draft" }))] }));
    };
}
exports.createRenderTopToolbarCustomActions = createRenderTopToolbarCustomActions;
//# sourceMappingURL=createRenderTopToolbarCustomActions.js.map
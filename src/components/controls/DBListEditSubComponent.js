"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBListEditSubComponent = exports.DBDictionaryEditSubComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const material_react_table_1 = require("material-react-table");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const useInitial_1 = require("../../hooks/useInitial");
const useWhyDidIUpdate_1 = require("../../hooks/useWhyDidIUpdate");
const groupCol_1 = require("../../schema/defs/groupCol");
const is_1 = require("../../common/is");
const useConvertDictionaryItem_1 = require("../../hooks/useConvertDictionaryItem");
const useConvertListItem_1 = require("../../hooks/useConvertListItem");
const EditControls_1 = require("./EditControls");
function DBDictionaryEditSubComponent(props) {
    const logger = (0, useWhyDidIUpdate_1.useLogger)();
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('DLListEditSubComponent', props);
    logger(`DBListEditSubComponent`, props.objectType);
    const { append, handleClose, isOpen, columns, objectType, KeyControl, keyType } = props;
    const dictionaryColumns = (0, react_1.useMemo)(() => [
        {
            accessorKey: 'key',
            Edit: KeyControl,
            header: 'Key',
            meta: {
                columnName: 'key',
                keyType: keyType
            }
        },
        ...(is_1.is.primitive(objectType) ? columns : [(0, groupCol_1.groupCol)((0, material_react_table_1.createMRTColumnHelper)(), 'Value', columns, 'value', 'bg-yellow-500', 'text-black')])
    ], [KeyControl, columns, keyType, objectType]);
    const convertAppend = (0, useConvertDictionaryItem_1.useConvertDictionaryItem)(objectType, append);
    console.log(`init`, objectType);
    const init = (0, useInitial_1.useInitial)(objectType);
    const defaultValues = (0, react_1.useMemo)(() => init(), [init]);
    const formContext = (0, react_hook_form_1.useForm)({
        defaultValues: Object.assign({ key: '' }, (is_1.is.primitive(objectType) ? defaultValues : ({
            value: defaultValues
        })))
    });
    logger(`formContext.getValues()`, JSON.stringify(formContext.getValues(), null, '\t'));
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.FormProvider, Object.assign({}, formContext, { children: (0, jsx_runtime_1.jsx)("form", { children: (0, jsx_runtime_1.jsxs)(material_1.Dialog, { open: isOpen, onClose: handleClose, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: "Insert New List Item" }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsx)(EditControls_1.EditControls, { columns: dictionaryColumns }) }), (0, jsx_runtime_1.jsxs)(material_1.DialogActions, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, { type: 'button', variant: 'contained', className: 'inline-flex', color: 'metal', onClick: handleClose, children: "Cancel" }), (0, jsx_runtime_1.jsx)(material_1.Button, { type: 'button', className: 'inline-flex', variant: 'contained', color: 'metal', onClick: formContext.handleSubmit((data) => {
                                    console.info(`handleSubmit(data) = `, data);
                                    convertAppend(data);
                                    handleClose();
                                }), children: "Submit" })] })] }) }) })));
}
exports.DBDictionaryEditSubComponent = DBDictionaryEditSubComponent;
function DBListEditSubComponent(props) {
    const logger = (0, useWhyDidIUpdate_1.useLogger)();
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('DLListEditSubComponent', props);
    logger(`DBListEditSubComponent`, props.objectType);
    const { append, handleClose, isOpen, columns, objectType } = props;
    const convertValue = (0, useConvertListItem_1.useConvertListItem)(objectType);
    const init = (0, useInitial_1.useInitial)(objectType);
    const defaultValues = (0, react_1.useMemo)(() => init(), [init]);
    const formContext = (0, react_hook_form_1.useForm)({
        defaultValues: defaultValues
    });
    logger(`formContext.getValues()`, JSON.stringify(formContext.getValues(), null, '\t'));
    // const EditComps = function () {
    //     return (
    //         <>
    //             {columns.map((x, index) => {
    //                 const Edit = x.Edit;
    //                 if (Edit == null) return null;
    //                 return <Edit key={index} cell={undefined as any} row={undefined as any} table={undefined as any} column={{ columnDef: x as any } as any} />;
    //             })}
    //         </>
    //     );
    // };
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.FormProvider, Object.assign({}, formContext, { children: (0, jsx_runtime_1.jsx)("form", { children: (0, jsx_runtime_1.jsxs)(material_1.Dialog, { open: isOpen, onClose: handleClose, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: "Insert New List Item" }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsx)(EditControls_1.EditControls, { columns: columns }) }), (0, jsx_runtime_1.jsxs)(material_1.DialogActions, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, { type: 'button', variant: 'contained', className: 'inline-flex', color: 'metal', onClick: handleClose, children: "Cancel" }), (0, jsx_runtime_1.jsx)(material_1.Button, { type: 'button', className: 'inline-flex', variant: 'contained', color: 'metal', onClick: formContext.handleSubmit((data) => {
                                    console.info(`handleSubmit(data) = `, data);
                                    const converted = convertValue(data);
                                    console.info(`convertedValue`, converted);
                                    append(converted);
                                    handleClose();
                                }), children: "Submit" })] })] }) }) })));
}
exports.DBListEditSubComponent = DBListEditSubComponent;
//# sourceMappingURL=DBListEditSubComponent.js.map
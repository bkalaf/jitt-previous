"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRenderCreateRowDialogContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const useUpdateRecord_1 = require("../../../hooks/useUpdateRecord");
const useCollectionRoute_1 = require("../../../hooks/useCollectionRoute");
const react_1 = require("react");
const useInitial_1 = require("../../../hooks/useInitial");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const camelToProper_1 = require("../../../common/text/camelToProper");
function createRenderCreateRowDialogContent() {
    return function RenderCreateRowDialogContent(props) {
        (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('RenderEditRowDialogContent', props);
        const { table, internalEditComponents } = props;
        console.info(`internalEditComponents`, internalEditComponents);
        const collection = (0, useCollectionRoute_1.useCollectionRoute)();
        const init = (0, useInitial_1.useInitial)(collection);
        const { handleSubmit } = (0, useUpdateRecord_1.useUpdateRecord)(table);
        const onCancel = (0, react_1.useCallback)(() => {
            table.setCreatingRow(null);
        }, [table]);
        const formContext = (0, react_hook_form_mui_1.useForm)({
            criteriaMode: 'all',
            defaultValues: init(),
            delayError: 5000
        });
        const onSubmit = (0, react_1.useCallback)((ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            formContext.handleSubmit((data) => handleSubmit(data))(ev);
        }, [formContext, handleSubmit]);
        const onReset = (0, react_1.useCallback)((ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            formContext.reset(init(), {
                keepErrors: true
            });
        }, [formContext, init]);
        return ((0, jsx_runtime_1.jsx)(react_hook_form_mui_1.FormProvider, Object.assign({}, formContext, { children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: onSubmit, onReset: onReset, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: (0, camelToProper_1.camelToProper)(collection) }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: internalEditComponents }), (0, jsx_runtime_1.jsx)(material_1.DialogActions, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, { className: 'flex w-full justify-end gap-x-2', children: [(0, jsx_runtime_1.jsx)(material_1.Button, { className: 'inline-flex', type: 'button', color: 'tertiary', onClick: onCancel, children: "Cancel" }), (0, jsx_runtime_1.jsx)(material_1.Button, { className: 'inline-flex', type: 'reset', color: 'tertiary', children: "Reset" }), (0, jsx_runtime_1.jsx)(material_1.Button, { className: 'inline-flex', type: 'submit', color: 'tertiary', children: "Submit" })] }) })] }) }))
        // <FormContainer criteriaMode='all' mode='onSubmit' reValidateMode='onChange' defaultValues={init() as DefaultValues<T>} handleSubmit={(ev: React.FormEvent) => {
        //     ev.preventDefault();
        //     ev.stopPropagation();
        //     handleSubmit()
        // }}>
        // </FormContainer>
        );
    };
}
exports.createRenderCreateRowDialogContent = createRenderCreateRowDialogContent;
//# sourceMappingURL=createRenderCreateRowDialogContent.js.map
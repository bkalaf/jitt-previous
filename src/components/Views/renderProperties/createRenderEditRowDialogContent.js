"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRenderEditRowDialogContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const useCollectionRoute_1 = require("../../../hooks/useCollectionRoute");
const react_1 = require("react");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const useLocalRealm_1 = require("../../../hooks/useLocalRealm");
const useConvert_1 = require("../../../hooks/useConvert");
const runTransaction_1 = require("../../../util/runTransaction");
const react_query_1 = require("@tanstack/react-query");
const useInvalidateCollection_1 = require("../../../hooks/useInvalidateCollection");
const useInitial_1 = require("../../../hooks/useInitial");
const realm_1 = require("realm");
const toJSON_1 = require("./toJSON");
const camelToProper_1 = require("../../../common/text/camelToProper");
function createRenderEditRowDialogContent() {
    return function RenderEditRowDialogContent(props) {
        (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('RenderEditRowDialogContent', props);
        const { table, internalEditComponents, row } = props;
        console.info(`internalEditComponents`, internalEditComponents);
        const collection = (0, useCollectionRoute_1.useCollectionRoute)();
        const init = (0, useInitial_1.useInitial)(collection);
        const realm = (0, useLocalRealm_1.useLocalRealm)();
        const defaultValues = (0, toJSON_1.toJSON)(row.original);
        const formContext = (0, react_hook_form_mui_1.useForm)({
            defaultValues: init(),
            values: defaultValues,
            criteriaMode: 'all',
            mode: 'onSubmit',
            reValidateMode: 'onChange'
        });
        const convert = (0, useConvert_1.useConvert)('object', collection);
        const invalidator = (0, useInvalidateCollection_1.useInvalidateCollection)();
        const { mutate } = (0, react_query_1.useMutation)({
            onSuccess: () => invalidator(),
            onError: (error) => console.error(error),
            mutationFn: (data) => {
                console.log(`onSubmit:data`, data);
                const converted = convert(data);
                console.log(`onSubmit.converted`, converted);
                const func = () => {
                    realm.create(collection, converted, realm_1.UpdateMode.All);
                };
                (0, runTransaction_1.runTransaction)(realm, func);
                return Promise.resolve();
            }
        });
        const onCancel = (0, react_1.useCallback)(() => {
            table.setEditingRow(null);
        }, [table]);
        const onSubmit = (0, react_1.useCallback)((ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            formContext.handleSubmit((data) => mutate(data, { onSuccess: () => table.setEditingRow(null) }))(ev);
        }, [formContext, mutate, table]);
        const onReset = (0, react_1.useCallback)((ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            formContext.reset();
        }, [formContext]);
        return ((0, jsx_runtime_1.jsx)(react_hook_form_mui_1.FormProvider, Object.assign({}, formContext, { children: (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: (0, camelToProper_1.camelToProper)(collection) }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: internalEditComponents }), (0, jsx_runtime_1.jsx)(material_1.DialogActions, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, { className: 'flex w-full justify-end gap-x-2', children: [(0, jsx_runtime_1.jsx)(material_1.Button, { className: 'inline-flex', type: 'button', color: 'metal', onClick: onCancel, children: "Cancel" }), (0, jsx_runtime_1.jsx)(material_1.Button, { className: 'inline-flex', type: 'button', color: 'metal', onClick: onReset, children: "Reset" }), (0, jsx_runtime_1.jsx)(material_1.Button, { className: 'inline-flex', type: 'button', onClick: onSubmit, color: 'metal', children: "Submit" })] }) })] }) })));
    };
}
exports.createRenderEditRowDialogContent = createRenderEditRowDialogContent;
//# sourceMappingURL=createRenderEditRowDialogContent.js.map
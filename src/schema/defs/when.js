"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$disableWhen = exports.$enableWhen = exports.whenPropertyNotZero = exports.whenProperty = exports.whenType = exports.addID = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useHasDetailType_1 = require("../../hooks/useHasDetailType");
const spreadPredicate_1 = require("./spreadPredicate");
function addID(id, col) {
    return Object.assign(Object.assign({}, col), { id });
}
exports.addID = addID;
function whenType(item, col) {
    return Object.assign(Object.assign({}, col), { Edit: function (props) {
            const { Edit } = col;
            const isDisabled = (0, useHasDetailType_1.useHasDetailType)('detailTypes', item);
            if (Edit == null)
                throw new Error('No Edit Cell');
            const EditComponent = Edit;
            return isDisabled ? null : (0, jsx_runtime_1.jsx)(EditComponent, Object.assign({}, props));
        } });
}
exports.whenType = whenType;
function whenProperty(propname, item, col) {
    return Object.assign(Object.assign({}, col), { Edit: function (props) {
            const { Edit } = col;
            const isDisabled = (0, useHasDetailType_1.useCheckProperty)(propname, item);
            if (Edit == null)
                throw new Error('No Edit Cell');
            const EditComponent = Edit;
            return isDisabled ? (0, jsx_runtime_1.jsx)(EditComponent, Object.assign({}, props)) : null;
        } });
}
exports.whenProperty = whenProperty;
function whenPropertyNotZero(propname, col) {
    return Object.assign(Object.assign({}, col), { Edit: function (props) {
            const { Edit } = col;
            const isDisabled = (0, useHasDetailType_1.useCheckPredicate)(propname, (x) => x == null && x === 0);
            if (Edit == null)
                throw new Error('No Edit Cell');
            const EditComponent = Edit;
            return isDisabled ? (0, jsx_runtime_1.jsx)(EditComponent, Object.assign({}, props)) : null;
        } });
}
exports.whenPropertyNotZero = whenPropertyNotZero;
exports.$enableWhen = {
    oldProperty: (name, item) => (col) => whenProperty(name, item, col),
    property: (name, item, isNull = false) => (col) => {
        const predicate = (value) => value == null ? isNull
            : Array.isArray(item) ? item.includes(value)
                : item === value;
        return (0, spreadPredicate_1.spreadPredicate)(name, predicate, true, ...(Array.isArray(col) ? col : [col]));
    }
};
exports.$disableWhen = {
    property: (name, item, isNull = false) => (col) => {
        const predicate = (value) => value == null ? isNull
            : Array.isArray(item) ? item.includes(value)
                : item === value;
        return (0, spreadPredicate_1.spreadPredicate)(name, predicate, false, ...(Array.isArray(col) ? col : [col]));
    }
};
//# sourceMappingURL=when.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDependencies = void 0;
const react_1 = require("react");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const identity_1 = require("../common/identity");
const handleDependency_1 = require("./handleDependency");
const opposite_1 = require("./opposite");
function useDependencies(...dependencies) {
    const watchedValues = (0, react_hook_form_mui_1.useWatch)({
        name: dependencies.map((x) => x.property)
    });
    return (0, react_1.useCallback)(() => {
        const funcs = dependencies.map(({ dependency, type }, index) => {
            const negater = type === 'enable' ? opposite_1.opposite : identity_1.identity;
            const predicate = (0, handleDependency_1.handleDependency)(dependency);
            return negater(predicate(watchedValues[index]));
        });
        console.log(`isDisabled results`, funcs);
        return funcs.some((x) => x);
    }, [dependencies, watchedValues]);
}
exports.useDependencies = useDependencies;
//# sourceMappingURL=useDependencies.js.map
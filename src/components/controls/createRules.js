"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRules = void 0;
function createRules({ min, max, minLength, maxLength, pattern, required, validate }) {
    return {
        validate,
        pattern: pattern ?
            {
                value: pattern,
                message: `Text must be in the form: ${pattern.toString()}.`
            }
            : undefined,
        required: required && required === true ?
            {
                value: required,
                message: 'Value is required.'
            }
            : undefined,
        minLength: minLength ?
            {
                value: minLength,
                message: `Text length must be greater than ${minLength}.`
            }
            : undefined,
        maxLength: maxLength ?
            {
                value: maxLength,
                message: `Text length must be greater than ${maxLength}.`
            }
            : undefined,
        min: min ?
            typeof min === 'number' ?
                {
                    value: min,
                    message: `Value must be greater than ${min}.`
                }
                : undefined
            : undefined,
        max: max ?
            typeof max === 'number' ?
                {
                    value: max,
                    message: `Value must be less than ${max}.`
                }
                : undefined
            : undefined
    };
}
exports.createRules = createRules;
//# sourceMappingURL=createRules.js.map
export function createRules({ min, max, minLength, maxLength, pattern, required }: { maxLength?: number; minLength?: number; pattern?: RegExp; required?: boolean; min?: number; max?: number; }) {
    return {
        pattern: pattern ? {
            value: pattern,
            message: `Text must be in the form: ${pattern.toString()}.`
        } : undefined,
        required: required && required === true ? {
            value: required,
            message: 'Value is required.'
        } : undefined,
        minLength: minLength ? {
            value: minLength,
            message: `Text length must be greater than ${minLength}.`
        } : undefined,
        maxLength: maxLength ? {
            value: maxLength,
            message: `Text length must be greater than ${maxLength}.`
        } : undefined,
        min: min ? {
            value: min,
            message: `Value must be greater than ${min}.`
        } : undefined,
        max: max ? {
            value: max,
            message: `Value must be less than ${max}.`
        } : undefined
    };
}

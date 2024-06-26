export function createRules<TValue>({
    min,
    max,
    minLength,
    maxLength,
    pattern,
    required,
    validate
}: {
    maxLength?: number;
    minLength?: number;
    pattern?: RegExp;
    required?: boolean;
    min?: number | Date;
    max?: number | Date;
    validate?: Record<string, (value: TValue, formValues: Record<string, any>) => string | string[] | boolean | Promise<string | string[] | boolean>>;
}) {
    return {
        validate,
        pattern:
            pattern ?
                {
                    value: pattern,
                    message: `Text must be in the form: ${pattern.toString()}.`
                }
            :   undefined,
        required:
            required && required === true ?
                {
                    value: required,
                    message: 'Value is required.'
                }
            :   undefined,
        minLength:
            minLength ?
                {
                    value: minLength,
                    message: `Text length must be greater than ${minLength}.`
                }
            :   undefined,
        maxLength:
            maxLength ?
                {
                    value: maxLength,
                    message: `Text length must be greater than ${maxLength}.`
                }
            :   undefined,
        min:
            min ?
                typeof min === 'number' ?
                    {
                        value: min,
                        message: `Value must be greater than ${min}.`
                    }
                :   undefined
            :   undefined,
        max:
            max ?
                typeof max === 'number' ?
                    {
                        value: max,
                        message: `Value must be less than ${max}.`
                    }
                :   undefined
            :   undefined
    };
}

export declare function createRules<TValue>({ min, max, minLength, maxLength, pattern, required, validate }: {
    maxLength?: number;
    minLength?: number;
    pattern?: RegExp;
    required?: boolean;
    min?: number | Date;
    max?: number | Date;
    validate?: Record<string, (value: TValue, formValues: Record<string, any>) => string | string[] | boolean | Promise<string | string[] | boolean>>;
}): {
    validate: Record<string, (value: TValue, formValues: Record<string, any>) => string | string[] | boolean | Promise<string | string[] | boolean>> | undefined;
    pattern: {
        value: RegExp;
        message: string;
    } | undefined;
    required: {
        value: true;
        message: string;
    } | undefined;
    minLength: {
        value: number;
        message: string;
    } | undefined;
    maxLength: {
        value: number;
        message: string;
    } | undefined;
    min: {
        value: number;
        message: string;
    } | undefined;
    max: {
        value: number;
        message: string;
    } | undefined;
};

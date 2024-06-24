export const surround =
    (left: string, right: string, ignoreIfNil = false) =>
    (value?: string) =>
        value == null ?
            ignoreIfNil ? undefined
            :   [left, value ?? '', right].join('')
        :   [left, value ?? '', right].join('');

export const surroundParensIgnore = surround('(', ')', true);
export const surroundParensNoIgnore: (s: string) => string = surround('(', ')') as (s: string) => string;
export const surroundQuotesIgnore = surround('"', '"', true);
export const surroundQuotesNoIgnore: (s: string) => string = surround('"', '"') as (s: string) => string;
export const surroundSquareBracesIgnore = surround('[', ']', true);
export const surroundSquareBracesNoIgnore: (s: string) => string = surround('[', ']') as (s: string) => string;

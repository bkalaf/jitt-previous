import { ColumnMeta } from '@tanstack/react-table';
export declare function standardizeOptions(inc: Record<string, string | {
    text: string;
    key: string;
}> | Array<{
    text: string;
    key: string;
    aliases?: string[];
} | string>): Exclude<ColumnMeta<any, any>['enumInfo'], undefined>;

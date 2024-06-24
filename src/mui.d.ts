import $masterEnum from './schema/enums/enum-info.json';

export type EnumName = keyof typeof $masterEnum;

export interface IPalletteColors<T> {
    important: T;
    highlight: T;
    callout: T;
    neon: T;
    metal: T;
    neutral: T;
    caution: T;
    ash: T;
    dimmed: T;
    vivid: T;
}

declare module '@tanstack/table-core' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface ColumnMeta<TData extends RowData, TValue> {
        isCalc?: boolean;
        columnName?: string;
        required?: boolean;
        readonly?: boolean;
        maxLength?: number;
        minLength?: number;
        min?: number | Date;
        max?: number | Date;
        pattern?: RegExp;
        validate?: Record<string, (value: TValue, formValues: Record<string, any>) => string | string[] | boolean | Promise<string | string[] | boolean>>;
        type?: React.HTMLInputTypeAttribute;
        step?: number;
        objectType?: string;
        onChange?: (setValue: (name: string, value: any) => void, oldValue: any, newValue: any) => void;
        formatter?: (value?: TValue) => string;
        uom?: string;
        // enumType?: EnumName;
        flattener?: (value?: TValue) => string;
        dateType?: 'past' | 'future';
        // options?: { text: string; key: string }[]; // Record<string, string | { text: string; key: string; }>;
        multiple?: boolean;
        freeSolo?: boolean;
        comparator?: (x?: TValue, y?: TValue) => Compared;
        flags?: string[];
        keyType?: 'faceted' | 'string' | string;
        enumInfo?: {
            asArray: { text: string, key: string }[],
            asRecord: Record<string, { text: string, selector?: string, key: string }>
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface TableMeta<TData extends RowData> {}
}

declare module '@tanstack/table-core' {
    interface SortingFns {
        sortBarcode: SortingFn<any>;
    }
    interface FilterFns {
        fuzzy: FilterFn<unknown>;
    }
    interface FilterMeta {
        itemRank: RankingInfo;
    }
}
declare module '@mui/material/styles' {
    interface Palette {
        important: Palette['primary'];
        highlight: Palette['primary'];
        callout: Palette['primary'];
        neon: Palette['primary'];
        caution: Palette['primary'];
        neutral: Palette['primary'];
        metal: Palette['primary'];
        ash: Pallette['primary'];
        vivid: Pallette['primary'];
        dimmed: Pallette['primary'];
        tertiary?: PaletteOptions['primary'];
    }

    interface PaletteOptions {
        important?: PaletteOptions['primary'];
        highlight?: PaletteOptions['primary'];
        callout?: PaletteOptions['primary'];
        neon?: PaletteOptions['primary'];
        caution?: PaletteOptions['primary'];
        neutral?: PaletteOptions['primary'];
        metal?: PaletteOptions['primary'];
        ash?: PaletteOptions['primary'];
        vivid?: PaletteOptions['primary'];
        dimmed?: PaletteOptions['primary'];
        tertiary?: PaletteOptions['primary'];
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides extends IPalletteColors<true> {
        metal: true;
        important: true;
        callout: true;
        hightlight: true;
        neon: true;
        caution: true;
        ash: true;
        vivid: true;
        dimmed: true;
        tertiary: true;
    }
}
declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides extends IPalletteColors<true> {}
}
declare module '@mui/material/SpeedDial' {
    interface SpeedDialPropsColorOverrides extends IPalletteColors<true> {}
}
declare module '@mui/material/AppBar' {
    interface AppBarPropsColorOverrides extends IPalletteColors<true> {}
}

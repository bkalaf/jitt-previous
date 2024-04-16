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
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface TableMeta<TData extends RowData> {
    }
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
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides extends IPalletteColors<true> { };
}
declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides extends IPalletteColors<true> { };
}
declare module '@mui/material/SpeedDial' {
    interface SpeedDialPropsColorOverrides extends IPalletteColors<true> { };
}
declare module '@mui/material/AppBar' {
    interface AppBarPropsColorOverrides extends IPalletteColors<true> { };
}
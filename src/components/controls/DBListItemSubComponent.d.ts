import { UseFieldArrayReturn } from 'react-hook-form';
export declare function DBDictionaryItemSubComponent<TValue>(props: {
    remove: (key: string) => void;
    index: string;
    value: TValue;
    objectType: string;
    LIComponent: ListItemCellComponent<TValue>;
}): import("react/jsx-runtime").JSX.Element;
export declare function DBListItemSubComponent<TValue>(props: {
    remove: UseFieldArrayReturn['remove'];
    index: number;
    value: TValue;
    objectType: string;
    LIComponent: ListItemCellComponent<TValue>;
}): import("react/jsx-runtime").JSX.Element;

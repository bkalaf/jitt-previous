export declare function useConvertDictionaryItem<TValue>(objectType: string, append: (data: {
    key: string;
    value: TValue;
}) => void): ({ key, value }: {
    key: string;
    value: any;
}) => void;

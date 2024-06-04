import { ClothingCareMap } from '../laundryCare';

// eslint-disable-next-line @typescript-eslint/ban-types
export const converted = (section: keyof typeof ClothingCareMap) => (key: string) => (ClothingCareMap[section] as Record<string, { text: string; Element: React.FunctionComponent<{}> }>)[key].text;

export type DBDictFacetedColOptions = {
    readonly?: boolean;
    faceted: true;
};
export type DBDictEnumColOptions = {
    readonly?: boolean;
    enumMap: EnumMap<string>;
};
export type DBDictStringColOptions = {
    readonly?: boolean;
    maxLength?: number;
    minLength?: number;
};

export type DBDictColOptions = DBDictEnumColOptions | DBDictFacetedColOptions | DBDictStringColOptions;

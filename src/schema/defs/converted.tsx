import { ClothingCareMap } from '../laundryCare';

// eslint-disable-next-line @typescript-eslint/ban-types

export const converted = (section: keyof typeof ClothingCareMap) => (key: string) => (ClothingCareMap[section] as Record<string, { text: string; Element: React.FunctionComponent<{}>; }>)[key].text;

import { ClothingCareMap } from '../laundryCare';

export const converted = (section: keyof typeof ClothingCareMap) => (key: string) =>
    (
        ClothingCareMap[section] as Record<
            string,
            {
                text: string;
                // eslint-disable-next-line @typescript-eslint/ban-types
                Element: React.FunctionComponent<{}>;
            }
        >
    )[key].text;

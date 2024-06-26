import { is } from '../../common/is';

export function getEnumText<T extends string>(map: Record<T, { text: string } | string>) {
    return function (key: T) {
        const result = map[key];
        return is.string(result) ? result : result.text;
    };
}

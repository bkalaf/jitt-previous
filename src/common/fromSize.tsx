import { sizeLookup } from '../schema/enums/sizes';
import { ISku } from '../types';

export function ofSize(key: 'selector' | 'text') {
    return (getter: SkuGetter<number | undefined>) => (sku: ISku) => {
        const value = getter(sku);
        if (value == null) return undefined;
        const result = sizeLookup(value);
        if (result == null) return undefined;
        return result[key];
    };
}
export function fromSize(key: 'selector' | 'text') {
    return ofSize(key)
}

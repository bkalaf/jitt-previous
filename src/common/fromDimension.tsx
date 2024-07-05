import { ISku } from '../types';
import { is } from './is';
import { lengthInchesToCentimeters } from './measure';
import { parentheses } from './parentheses';
import { identity } from './identity';

// export const capacityGB = fromMeasure<

export const fromDimension = ($header: string) => () => (getter: SkuGetter<{ height?: IMeasure<LengthUnitsOfMeasure>, width?: IMeasure<LengthUnitsOfMeasure>, length?: IMeasure<LengthUnitsOfMeasure> }>) => {
    return (sku: ISku) => {
        const result = getter(sku);
        if (result == null) return undefined;
        const { length, width, height } = result;
        const hasLength = length != null && length.value !== 0;
        const hasWidth = width != null && width.value !== 0;
        const hasHeight = height != null && height.value !== 0;
        const header = parentheses([hasLength ? 'l' : undefined, hasWidth ? 'w' : undefined, hasHeight ? 'h' : undefined].filter(is.not.nil).join(''));
        const l = lengthInchesToCentimeters(identity as any)(length as any)
        const w = lengthInchesToCentimeters(identity as any)(width as any);
        const h = lengthInchesToCentimeters(identity as any)(height as any);
        return {
            header: [$header, header].join(' '),
            value: [l, w, h].filter(is.not.nil).join(' x ')
        };
    };
};

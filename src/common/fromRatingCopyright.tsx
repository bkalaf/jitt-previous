import { ISku } from '../types';
import { is } from './is';
import { EnumKey, parentheses } from './composeR';
import { ofEnum } from './ofEnum';

export function fromRatingCopyright<TRating extends string>({ ratingKey, getCopyright, getRating }: { ratingKey: EnumKey; getCopyright: SkuGetter; getRating: SkuGetter<TRating>; }) {
    return (sku: ISku) => parentheses([getCopyright(sku), ofEnum(ratingKey, 'text')(getRating(sku))].filter(is.not.nil).join(','));
}

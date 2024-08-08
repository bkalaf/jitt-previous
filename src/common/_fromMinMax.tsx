// import { IMinMax } from '../types';
// import { combine } from './composeR';
// import { is } from './is';

// export function ofMinMax(minMax?: IMinMax<number>) {
//     if (minMax == null) return undefined;
//     return [minMax.min?.toFixed(0), minMax.max?.toFixed(0)].filter(is.not.nil).join(' - ');
// }
// export function fromMinMax(getter: SkuGetter<IMinMax<number>>) {
//     return combine(getter, ofMinMax);
// }

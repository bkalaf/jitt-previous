// import { MeasureType } from '../../types';
// import UNICODE from './unicode';
// import { multiply, isDouble, divide } from './measure';
// import { simplifyUp } from './simplifyUp';
// import { simplifyDown } from './simplifyDown';
// import { truncateAuto } from '../../common/number/truncateAuto';
// import { surroundParensIgnore } from '../../common/text/surround';
// import { is } from '../../common/is';
// export type Show = 'original-only' | 'converted-only' | 'metric' | 'metric-reversed';
// export function handleMeasureType(kind: MeasureType) {
//     const { convert, convert2, convertedToUOM, show, uom } = getMeasureTypeOpts(kind);
//     return function (value?: number, $uom?: string) {
//         const [$original, $originalUOM] = [truncateAuto(value, 2), uom] as [string, string];
//         const [$converted, $convertedUOM] = convert && value ? ([convert(value), convertedToUOM] as [string, string]) : ([$original, $originalUOM] as [string, string]);
//         const [$larger, $smaller, $largerUOM, $smallerUOM] = convert2 && $converted ? convert2(parseFloat($converted), $convertedUOM) : [parseFloat($converted), undefined, $convertedUOM, undefined] as [number, undefined, string, undefined];
//         const larger = [truncateAuto($larger, 2), $largerUOM].join('');
//         const smaller = $smaller ? surroundParensIgnore([truncateAuto($smaller, 2), $smallerUOM].join('')) : undefined;
//         return [larger, smaller].filter(is.not.nil).join(' ');
//     }
// }
//# sourceMappingURL=_handleMeasureType.js.map
import { IBarcode } from '../types';
import { is } from '../common/is';


export function barcodeFormatter(x?: unknown) {
    const barcode = x as IBarcode | string | undefined;
    if (barcode == null) return '';
    const chars = is.string(barcode) ? barcode.split('') : barcode.value.split('');
    return [chars[0] === '0' ? undefined : chars[0], chars[1], chars.slice(2, 7).join(''), chars.slice(7, 12).join(''), chars[12]].filter((x) => x != null).join('-');
}

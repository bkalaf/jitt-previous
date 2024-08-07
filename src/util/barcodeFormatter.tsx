import { IBarcode } from '../types';
import { is } from '../common/is';

export function barcodeFormatter(x?: IBarcode | string) {
    const barcode = x as IBarcode | string | undefined;
    if (barcode == null) return '';
    const chars = is.string(barcode) ? barcode.split('') : barcode.value.split('');
    return [chars[0] === '0' ? undefined : chars[0], chars[1], chars.slice(2, 7).join(''), chars.slice(7, 12).join(''), chars[12]].filter((x) => x != null).join('-');
}

export function formatBarcode(bc: IBarcode) {
    switch (bc.type) {
        case 'upc':
        case 'sku':
        case 'locator': {
            const v = bc.value.slice(1);
            return [v[0], v.slice(1, 6), v.slice(6, 11), v.slice(11, 12)].join('-');
        }
        case 'ean': {
            const v = bc.value;
            return [v.slice(0, 2), v.slice(2, 7), v.slice(7, 12), v.slice(12, 13)].join('-');
        }
        case 'isbn-13': {
            const v = bc.value;
            return [v.slice(0, 3), v.slice(3, 7), v.slice(7, 12), v.slice(12, 13)].join('-')
        }
        case 'isbn-10': {
            const v = bc.value.slice(3);
            return [v[0], v.slice(1, 5), v.slice(5, 9), v.slice(9, 10)].join('-')
        }
        case 'unknown':
            return '????';
    }
}

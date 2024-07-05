import { BarcodeTypes } from '../schema/enums';
import { IBarcode, ISku } from '../types';
import { barcodeFormatter } from '../util/barcodeFormatter';

export function fromBarcode(barcodeType: BarcodeTypes) {
    return (getter: SkuGetter<DBList<IBarcode>>) => (x: ISku) => {
        const result = Array.from((getter(x) ?? []).filter((bc) => bc.type === (barcodeType as BarcodeTypes)) ?? []);
        return result.length === 0 ?
                undefined
            :   result
                    .map((x) => barcodeFormatter(x.value))
                    .join(', ');
    };
}

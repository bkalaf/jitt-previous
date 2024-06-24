import dayjs from 'dayjs';
import { IBarcode, ICustomItemField, IHashTag, IHashTagUsage, IMadeOfSection } from '../types';
import { barcodeFormatter } from '../util/barcodeFormatter';


export const liComponents: Record<string, ListItemCellComponent<any>> = {
    hashTagUsage: ((value?: IHashTagUsage) => () => value == null ? '' : [dayjs(value.from).format('YYYY/MM/DD'), value.count.toFixed(0)].join(': ')),
    hashTag: ((value?: IHashTag) => () => value?.name ?? '') as ListItemCellComponent<IHashTag>,
    // attribute: ((value?: IAttribute) => () => value == null ? '' : [value.path, value.value].join(' == ')) as ListItemCellComponent<IAttribute>,
    // includedItem: ((value?: IIncludedItem) => () => value == null ? '' : [value.qty.toFixed(0), value.name].join('x ')),
    customItemField: ((value?: ICustomItemField) => () => value == null ? '' : [value.property, value.id, value.value].join(':: ')),
    barcode: ((value?: IBarcode) => () => value == null ? '' : barcodeFormatter(value)),
    madeOfSection: ((value?: IMadeOfSection) => () => value == null ? '' : [value.name, JSON.stringify(value.section)].join(': '))
};

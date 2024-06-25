import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IBarcode } from '../../types';
import { barcodeFormatter } from '../../util/barcodeFormatter';
import { col } from '../defs/col';
import { barcodeTypes } from '../enums/barcodeTypes';

const h = createMRTColumnHelper<IBarcode>();
const helper = col(h);

export const barcodeColumns: MRT_ColumnDef<IBarcode>[] = [
    helper.PK(),
    helper.string()('value', 'Value', (x: unknown) => barcodeFormatter(x as IBarcode), { maxLength: 13, required: true }),
    helper.enum()('type', 'Type', { options: barcodeTypes, required: true }),
    helper.bool()('isValidated', 'Is Validated'),
    helper.bool()('beenPrinted', 'Been Printed')
] as MRT_ColumnDef<IBarcode>[];

import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IBarcode } from '../../types';
import { barcodeFormatter } from '../../util/barcodeFormatter';
import { col } from '../defs/col';
import { barcodeTypes } from '../enums/barcodeTypes';

const h = createMRTColumnHelper<IBarcode>();
const helper = col(h);

export const barcodeColumns: MRT_ColumnDef<IBarcode>[] = [
    helper.pk(),
    helper.string('value', 'Value', barcodeFormatter, { maxLength: 13, required: true }),
    helper.enum('type', 'Type', { options: barcodeTypes, required: true }),
    helper.bool('isValidated', 'Is Validated')
] as MRT_ColumnDef<IBarcode>[];

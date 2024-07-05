import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IBarcode } from '../../types';
import { barcodeFormatter } from '../../util/barcodeFormatter';
import { col } from '../defs/col';
import { barcodeTypes } from '../enums/barcodeTypes';

const h = createMRTColumnHelper<IBarcode>();
const helper = col(h);

export const barcodeColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.string(...dependencies)('value', 'Value', (x: unknown) => barcodeFormatter(x as IBarcode), { maxLength: 13, required: true }),
        helper.enum(...dependencies)('type', 'Type', { options: barcodeTypes, required: true }),
        helper.bool(...dependencies)('isValidated', 'Is Validated'),
        helper.bool(...dependencies)('beenPrinted', 'Been Printed')
    ] as MRT_ColumnDef<T>[];

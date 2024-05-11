import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { ISquareFootage } from '../../types';
import { col } from '../defs/col';

export const squareFootage = {
    name: schemaName($.squareFootage()),
    embedded: true,
    properties: {
        length: $.double.opt,
        width: $.double.opt
    }
}

export const h = createMRTColumnHelper<ISquareFootage>();
const helper = col(h)

export const squareFootageColumns: MRT_ColumnDef<ISquareFootage, any>[] = [
    helper.measure('length', 'Length', 'ft', { min: 0 }),
    helper.measure('width', 'Width', 'ft', { min: 0 })
]
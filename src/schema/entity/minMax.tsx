import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { $ } from '../$';
import { IMinMax, Int } from '../../types';
import { schemaName } from '../../util/schemaName';
import { col } from '../defs/col';


export const minMax: Realm.ObjectSchema = {
    name: schemaName($.minMax()),
    embedded: true,
    properties: {
        min: $.int.opt,
        max: $.int.opt
    }
};

const h = createMRTColumnHelper<IMinMax<Int>>();
const helper = col(h);

export const minMaxColumns: MRT_ColumnDef<IMinMax<Int>>[] = [
    helper.int('min', 'Min', { min: 0 }),
    helper.int('max', 'Max', { min: 0 })
]
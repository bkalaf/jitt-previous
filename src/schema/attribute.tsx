import Realm from 'realm';
import { schemaName } from '../util/schemaName';
import { $ } from './$';
import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { col } from './defs/col';
import { IAttribute } from '../types';

export const attribute: Realm.ObjectSchema = {
    name: schemaName($.attribute()),
    embedded: true,
    properties: {
        path: $.string(),
        unset: $.bool(),
        value: $.mixed()
    }
}

export const h = createMRTColumnHelper<IAttribute>();
export const helper = col(h);

export const attributeColumns: MRT_ColumnDef<IAttribute>[] = [
    helper.freeSolo('path', 'Path', (x: string, y: string) => x.localeCompare(y) as Compared, { required: true }),
    helper.bool('unset', 'Unset'),
    helper.string('value', 'Value', undefined, { maxLength: 150 })
]

import Realm from "realm";
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { ICustomItemField } from '../../types';
import { col } from '../defs/col';

// ex: CustomItemFieldId-Platform

export const customItemField: Realm.ObjectSchema = {
    name: schemaName($.customItemField()),
    embedded: true,
    properties: {
        name: $.string(),
        id: $.string(),
        value: $.string()
    }
}

const h = createMRTColumnHelper<ICustomItemField>();
const helper = col(h);

export const customItemFieldColumns: MRT_ColumnDef<ICustomItemField>[] = [
    helper.string('name', 'Name', undefined, { required: true, maxLength: 50 }),
    helper.string('id', 'ID', undefined, { required: true, maxLength: 100 }),
    helper.string('value', 'Value', undefined, { required: true, maxLength: 150 })
]
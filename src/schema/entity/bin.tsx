import Realm from 'realm';
import { IBarcode, IBin } from '../../types';
import { ObjectId } from 'bson';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { col } from '../defs/col';

export class Bin extends Realm.Object<IBin> implements IBin {
    _id: ObjectId;
    barcode: IBarcode;
    name: string;
    notes?: string | undefined;

    static labelProperty = 'name';
    
    static schema: Realm.ObjectSchema = {
        name: schemaName($.bin()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            barcode: $.barcode(),
            name: $.string(),
            notes: $.string.opt
        }
    };
}

const h = createMRTColumnHelper<IBin>();
const helper = col(h);

export const binColumns: MRT_ColumnDef<IBin>[] = [
    helper.pk(),
    helper.lookup('barcode', 'Barcode', { objectType: 'bin', labelProperty: 'name' }),
    helper.string('name', 'Name', undefined, { maxLength: 50, required: true }),
    helper.string('notes', 'Notes', undefined, { maxLength: 250, required: false })
];

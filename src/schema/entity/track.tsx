import Realm from "realm";
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { ITrack } from '../../types';
import { col } from '../defs/col';

export const trackSchema: Realm.ObjectSchema = {
    name: schemaName($.track()),
    embedded: true,
    properties: {
        feat: $.string.list,
        index: $.int(),
        name: $.string.opt,
        runtimeSecs: $.int.opt
    }
}

const h = createMRTColumnHelper<ITrack>();
const helper = col(h);

export const trackColumns: MRT_ColumnDef<ITrack>[] = [
    helper.listOfPrimitive('feat', 'Featuring', 'string'),
    helper.int('index', 'Index', { min: 0, required: true }),
    helper.string('name', 'Name', undefined, { required: true }),
    helper.measure('runtimeSecs', 'Runtime (sec)', 'sec', { min: 0 })
]
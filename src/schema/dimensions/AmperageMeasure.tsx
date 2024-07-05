import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';
import Realm from 'realm';
import { doubleMeasureColumns } from '../entity/details/measureColumns';

export class AmperageMeasure extends DoubleMeasure<AmperageUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.amperageMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('A'),
            value: $.double.default(0)
        }
    }
    static init(): InitValue<IMeasure<AmperageUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'A'
        }
    }
    static columns: MRT_ColumnDef<AmperageMeasure>[] = doubleMeasureColumns<AmperageMeasure>(createMRTColumnHelper<AmperageMeasure>(), 'amperageUnits')() as MRT_ColumnDef<AmperageMeasure>[];
}

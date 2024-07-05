import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { IMeasure, MemorySpeedUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { intMeasureColumns } from '../entity/details/measureColumns';
import { IntMeasure } from './IntMeasure';

export class MemorySpeedMeasure extends IntMeasure<MemorySpeedUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.memorySpeedMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('MHz'),
            value: $.int.default(0)
        }
    };
    static init(): InitValue<IMeasure<MemorySpeedUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'MHz'
        };
    }
    static columns: MRT_ColumnDef<MemorySpeedMeasure>[] = intMeasureColumns<MemorySpeedMeasure>(createMRTColumnHelper<MemorySpeedMeasure>(), 'amperageUnits')() as MRT_ColumnDef<MemorySpeedMeasure>[];
}


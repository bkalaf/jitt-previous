import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { doubleMeasureColumns } from '../entity/details/measureColumns';
import { DoubleMeasure } from './DoubleMeasure';
import { ResolutionUnitOfMeasure } from '../enums';


export class ResolutionMeasure extends DoubleMeasure<ResolutionUnitOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.resolutionMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('MP'),
            value: $.double.default(0)
        }
    };
    static init(): InitValue<IMeasure<ResolutionUnitOfMeasure>> {
        return {
            value: 0,
            uom: 'MP'
        };
    }
    static columns: MRT_ColumnDef<ResolutionMeasure>[] = doubleMeasureColumns<ResolutionMeasure>(createMRTColumnHelper<ResolutionMeasure>(), 'resolutionUnitOfMeasure')() as MRT_ColumnDef<ResolutionMeasure>[];
}

import { $ } from '../$';
import { ISquareFootage } from '../../types';
import { schemaName } from '../../util/schemaName';
import Realm from 'realm';
import { EntityBase } from './EntityBase';
import { DistanceMeasure } from '../dimensions/DistanceMeasure';
import { is } from '../../common/is';
import { MRT_ColumnDef } from 'material-react-table';
import { squareFootageColumns } from '../columns/squareFootage';

export class SquareFootage extends EntityBase<ISquareFootage> implements ISquareFootage {
    static columns: MRT_ColumnDef<ISquareFootage>[] = squareFootageColumns();
    length: IMeasure<DistanceUnitsOfMeasure>;
    width: IMeasure<DistanceUnitsOfMeasure>;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.squareFootage()),
        embedded: true,
        properties: {
            length: $.distanceMeasure(),
            width: $.distanceMeasure()
        }
    };
    static init(): InitValue<ISquareFootage> {
        const distanceInit = DistanceMeasure.init;
        return {
            length: distanceInit(),
            width: distanceInit()
        };
    }
    static update(item: ISquareFootage): ISquareFootage {
        return item;
    }
    static stringify = (value?: ISquareFootage, returnUndefined = false) => () => {
        if (value == null) return returnUndefined ? undefined : '';
        const l = DistanceMeasure.stringify(value.length, true);
        const w = DistanceMeasure.stringify(value.width, true);
        return l == null && w == null ? returnUndefined ? undefined : '' : [l, w].filter(is.not.nil).join(' x ');
    } 
    static liComponent = SquareFootage.stringify;
}

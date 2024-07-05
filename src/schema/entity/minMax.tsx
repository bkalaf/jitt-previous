import Realm from 'realm';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { IMinMax } from '../../types';
import { EntityBase } from './EntityBase';
import { MRT_ColumnDef } from 'material-react-table';
import { minMaxColumns } from '../columns/minMax';

export class MinMax extends EntityBase<IMinMax<number>> implements IMinMax<number> {
    static columns: MRT_ColumnDef<IMinMax<number>>[] = minMaxColumns();
    min: Opt<number>;
    max: Opt<number>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.minMax()),
        embedded: true,
        properties: {
            min: $.int.opt,
            max: $.int.opt
        }
    };
    static update(item: IMinMax<number>) {
        return item;
    }
    static stringify = (value?: IMinMax<number>) => () => (value == null ? '' : [value.min, value.max].filter((x) => x != null).join(' to '));
    static liComponent = MinMax.stringify;
    static init(): InitValue<IMinMax<number>> {
        return {};
    }
}

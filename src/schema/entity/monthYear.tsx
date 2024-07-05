import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../$';
import { IMonthYear, Month } from '../../types';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import Realm from 'realm';
import { monthYearColumns } from '../columns/monthYearColumns';

export class MonthYear extends EntityBase<IMonthYear> implements IMonthYear {
    static columns: MRT_ColumnDef<IMonthYear>[] = monthYearColumns();
    month: Month;
    year: string;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.monthYear()),
        embedded: true,
        properties: {
            month: $.int.default(1),
            year: $.string.default('2024')
        }
    }
    static stringify: StringifyComponent<IMonthYear> = (value?: IMonthYear, returnUndefined = false) => () => value == null ? returnUndefined ? undefined : '' : [value.month.toFixed(0).padStart(2, '0'), value.year].join('/');
    static liComponent: ListItemCellComponent<IMonthYear> = MonthYear.stringify;
    static init(): InitValue<IMonthYear> {
        return {
            month: 1,
            year: '2024'
        }
    }
    static update(item: IMonthYear) {
        return item;
    }
}
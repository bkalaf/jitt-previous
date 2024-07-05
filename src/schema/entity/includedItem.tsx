import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { IIncludedItem } from '../../types';
import { EntityBase } from './EntityBase';
import Realm from 'realm';
import { MRT_ColumnDef } from 'material-react-table';
import { includedItemColumns } from '../columns/includedItem';

export class IncludedItem extends EntityBase<IIncludedItem> implements IIncludedItem {
    static columns: MRT_ColumnDef<IIncludedItem>[] = includedItemColumns();
    qty: number;
    name: string;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.includedItem()),
        embedded: true,
        properties: {
            qty: $.int.default(1),
            name: $.string()
        }
    };
    static stringify = (value?: IIncludedItem, returnUndefined = false) => () => (value == null ? returnUndefined ? undefined : '' : [value.qty.toFixed(0), value.name].join('x '));
    static liComponent = IncludedItem.stringify;
    static update(item: IIncludedItem): IIncludedItem {
        return item;
    }
    static init(): InitValue<IIncludedItem> {
        return {
            qty: 1,
            name: ''
        };
    }
}

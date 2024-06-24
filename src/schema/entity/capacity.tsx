import { IDimension } from '../../types';
import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { truncateAuto } from '../../components/Cells/truncateAuto';
import { EntityBase } from './EntityBase';

// export class Capacity extends EntityBase<ICapacity> implements ICapacity {
//     uom: CapacityUOM;
//     value: number;

//     static schema: Realm.ObjectSchema = {
//         name: schemaName($.capacity()),
//         embedded: true,
//         properties: {
//             uom: $.string.default('GB'),
//             value: $.double.default(0)
//         }
//     };
//     static liComponent: ListItemCellComponent<ICapacity> = (value?: ICapacity) => () => (value == null ? '' : `${truncateAuto(value.value)}${value.uom}`);
// }

export class Dimension<T extends string> extends EntityBase<IDimension<T>> implements IDimension<T> {
    uom: T;
    value: number;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.dimension()),
        embedded: true,
        properties: {
            uom: $.string.default(''),
            value: $.double.default(0)
        }
    };
    static liComponent: ListItemCellComponent<IDimension<string>> = (value?: IDimension<string>) => () => (value == null ? '' : `${truncateAuto(value.value)}${value.uom}`);
    static update(item: IDimension<string>): IDimension<string> {
        return item;
    }
    static init(): InitValue<IDimension<string>>{
        return {
            value: 0,
            uom: ''
        }
    }
}
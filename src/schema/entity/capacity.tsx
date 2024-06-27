import { IOldDimension } from '../../types';
import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { truncateAuto } from '../../common/number/truncateAuto';
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

/** @deprecated */
export class OldDimension<T extends string> extends EntityBase<IOldDimension<T>> implements IOldDimension<T> {
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
    static liComponent: ListItemCellComponent<IOldDimension<string>> = (value?: IOldDimension<string>) => () => (value == null || value.uom === '' ? '' : `${truncateAuto(value.value)}${value.uom}`);
    static update(item: IOldDimension<string>): IOldDimension<string> {
        return item;
    }
    static init(): InitValue<IOldDimension<string>> {
        return {
            value: 0,
            uom: ''
        };
    }
}

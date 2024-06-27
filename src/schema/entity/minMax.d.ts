import Realm from 'realm';
import { IMinMax, Opt } from '../../types';
import { EntityBase } from './EntityBase';
export declare class MinMax extends EntityBase<IMinMax<number>> implements IMinMax<number> {
    min: Opt<number>;
    max: Opt<number>;
    static schema: Realm.ObjectSchema;
    static update(item: IMinMax<number>): IMinMax<number>;
    static liComponent: ListItemCellComponent<IMinMax<number>>;
    static init(): InitValue<IMinMax<number>>;
}

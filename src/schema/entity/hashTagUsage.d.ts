import { IHashTagUsage } from '../../types';
import Realm from 'realm';
import { EntityBase } from './EntityBase';
export declare class HashTagUsage extends EntityBase<IHashTagUsage> {
    from: Date;
    count: number;
    static schema: Realm.ObjectSchema;
    static liComponent: ListItemCellComponent<IHashTagUsage>;
    static update(item: IHashTagUsage): IHashTagUsage;
    static init(): InitValue<IHashTagUsage>;
}

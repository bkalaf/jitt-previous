import Realm from 'realm';
import { EntityBase } from './EntityBase';
import { IShipping } from '../../types';
export declare class Shipping extends EntityBase<IShipping> implements IShipping {
    id: number;
    version: number;
    static schema: Realm.ObjectSchema;
    static update(item: IShipping): IShipping;
    static labelProperty: string;
    static init(): InitValue<IShipping>;
}

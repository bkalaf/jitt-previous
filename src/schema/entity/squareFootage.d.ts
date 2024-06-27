import { ISquareFootage, Opt } from '../../types';
import Realm from 'realm';
import { EntityBase } from './EntityBase';
export declare class SquareFootage extends EntityBase<ISquareFootage> implements ISquareFootage {
    length: Opt<number>;
    width: Opt<number>;
    static schema: Realm.ObjectSchema;
    static init(): InitValue<ISquareFootage>;
    static update(item: ISquareFootage): ISquareFootage;
    static liComponent: ListItemCellComponent<ISquareFootage>;
}

import { IApparelSize } from '../../types';
import { EntityBase } from './EntityBase';
import Realm from 'realm';
export declare class ApparelSize extends EntityBase<IApparelSize> implements IApparelSize {
    get selector(): string;
    index: number;
    key: string;
    text: string;
    static schema: Realm.ObjectSchema;
    static liComponent: ListItemCellComponent<IApparelSize>;
    static update(item: IApparelSize): IApparelSize;
    static init(): InitValue<IApparelSize>;
}

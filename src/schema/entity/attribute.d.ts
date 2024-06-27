import Realm from 'realm';
import { IAttribute } from '../../types';
import { EntityBase } from './EntityBase';
export declare class Attribute extends EntityBase<IAttribute> implements IAttribute {
    path: string;
    unset: boolean;
    value: unknown;
    static schema: Realm.ObjectSchema;
    static liComponent: (value?: IAttribute) => () => string;
    static update(item: IAttribute): IAttribute;
    static init(): InitValue<IAttribute>;
}

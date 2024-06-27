import Realm, { BSON } from 'realm';
import { IBrand, IHashTag, IMercariBrand } from '../../types';
import { EntityBase } from './EntityBase';
export declare function getRange(low: number, high: number): number[];
export declare function toCharCode(s: string): number;
export declare function fromCharCode(n: number): string;
export declare function createFolderName(name: string): string;
export declare class Brand extends EntityBase<IBrand> implements IBrand {
    folder: string;
    _id: BSON.ObjectId;
    name: string;
    mercariBrand?: IMercariBrand | undefined;
    hashTags: DBList<IHashTag>;
    get allHashTags(): IHashTag[];
    static schema: Realm.ObjectSchema;
    static labelProperty: string;
    static update(item: IBrand): IBrand;
    static init(): InitValue<IBrand>;
}

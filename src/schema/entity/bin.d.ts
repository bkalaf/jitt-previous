import Realm, { BSON } from 'realm';
import { IBarcode, IBin } from '../../types';
import { EntityBase } from './EntityBase';
export declare class Bin extends EntityBase<IBin> implements IBin {
    static barcodeGenerator: () => string;
    static update(bin: Bin): Bin;
    addBarcode(this: IBin, generator: () => string): IBin;
    _id: BSON.ObjectId;
    barcode: IBarcode;
    name: string;
    notes?: string | undefined;
    static labelProperty: string;
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IBin>;
}

import { IBarcode } from '../../types';
import Realm, { BSON } from 'realm';
import { BarcodeTypes } from '../enums';
import { EntityBase } from './EntityBase';
export declare class Barcode extends EntityBase<IBarcode> implements IBarcode {
    beenPrinted: boolean;
    _id: BSON.ObjectId;
    isValidated: boolean;
    type: BarcodeTypes;
    value: string;
    get scanValue(): string;
    equalTo(value: string | IBarcode): boolean;
    get linkedSkus(): any;
    get linkedBin(): any;
    get kind(): "sku" | "unknown" | "bin";
    static schema: Realm.ObjectSchema;
    static update(obj: Barcode): Barcode;
    static createFromFullUPC(value: string, doNotCreate?: boolean): IBarcode;
    static createFromTruncatedUPC(value: string, doNotCreate?: boolean): IBarcode;
    static labelProperty: string;
    static init(): InitValue<IBarcode>;
}

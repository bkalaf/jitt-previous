import { IBarcode, IBin } from '../../types';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { classifyBarcode } from '../../util/classifyBarcode';
import Realm, { BSON } from 'realm';
import { runTransaction } from '../../util/runTransaction';
import { calculateUPCCheckDigit } from '../../util/calculateUPCCheckDigit';
import { is } from '../../common/is';
import { BarcodeTypes } from '../enums';
import { EntityBase } from './EntityBase';

export class Barcode extends EntityBase<IBarcode> implements IBarcode {
    beenPrinted: boolean;
    _id: BSON.ObjectId;
    isValidated: boolean;
    type: BarcodeTypes;
    value: string;
    get scanValue(): string {
        function inner(inStr: string) {
            return inStr.startsWith('0') ? inStr.slice(1, inStr.length) : inStr;
        }
        return inner(this.value.slice(0, this.value.length - 1));
    }
    equalTo(value: string | IBarcode) {
        const thisValue = this.scanValue;
        function inner(inStr: string) {
            return inStr.startsWith('0') ? inStr.slice(1, inStr.length) : inStr;
        }
        const thatValue = is.string(value) ? inner(value.padStart(13, '0').slice(0, 12)) : value.scanValue;
        // assert(thisValue.length === thatValue.length, 'compared barcode values are not the same length');
        return thisValue === thatValue;
    }
    get linkedSkus() {
        return this.linkingObjects('sku', 'skus') as any;
    }
    get linkedBin() {
        return this.linkingObjects<IBin>('bin', 'barcode') as any;
    }
    get kind() {
        return this.linkedSkus.length > 0 ? 'sku' : this.linkedBin.length > 0 ? 'bin' : 'unknown';
    }
    static schema: Realm.ObjectSchema = {
        name: schemaName($.barcode()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            isValidated: $.bool.default(false),
            type: $.string.default('unknown'),
            value: $.string.default('0000000000000'),
            beenPrinted: $.bool.default(false)
        }
    };
    static update(obj: Barcode): Barcode {
        console.info('Barcode.update');
        const func = () => {
            console.info('Barcode.update - running');
            obj.value = obj.value.padStart(13, '0');
        };
        if (obj.value.length !== 13) {
            runTransaction(Barcode.localRealm, func);
        }
        return obj;
    }
    static createFromFullUPC(value: string, doNotCreate = false): IBarcode {
        const realm = Barcode.localRealm;
        const fullBarcode = value.padStart(13, '0');
        const result = realm.objects<IBarcode>('barcode').filtered('value == $0', fullBarcode);
        if (result.length > 0) return result[0];
        const [isValidated, type] = classifyBarcode(fullBarcode);
        const obj = {
            _id: new BSON.ObjectId(),
            isValidated,
            type,
            value: fullBarcode,
            beenPrinted: false
        } as IBarcode;
        let final: RealmObj<IBarcode> | undefined;
        const func = () => {
            final = realm.create<IBarcode>('barcode', obj);
        };
        if (!doNotCreate) {
            runTransaction(realm, func);
        }
        return final ?? obj;
    }
    static createFromTruncatedUPC(value: string, doNotCreate = false) {
        const checkdigit = calculateUPCCheckDigit(value);
        return Barcode.createFromFullUPC([...value, checkdigit].join(''), doNotCreate);
    }
    static labelProperty = 'value';
    static init(): InitValue<IBarcode> {
        return {
            _id: new BSON.ObjectId(),
            isValidated: false,
            type: 'unknown',
            value: '0000000000000',
            beenPrinted: false
        }
    }
}



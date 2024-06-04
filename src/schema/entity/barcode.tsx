import { IBarcode } from '../../types';
import { barcodeTypes } from '../enums/barcodeTypes';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { classifyBarcode } from '../../util/classifyBarcode';
import Realm, { BSON } from 'realm';
import { runTransaction } from '../../util/runTransaction';
import { calculateUPCCheckDigit } from '../../util/calculateUPCCheckDigit';
import { is } from '../../common/is';
import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { col } from '../defs/col';
import { barcodeFormatter } from './barcodeFormatter';
import { BarcodeTypes } from '../enums';

export class Barcode extends Realm.Object<IBarcode> implements IBarcode {
    beenPrinted: boolean;
    _id: BSON.ObjectId;
    isValidated: boolean;
    type: BarcodeTypes;
    value: string;
    get scanValue(): string {
        return this.value.slice(0, this.value.length - 1);
    }
    equalTo(value: string | IBarcode) {
        const thisValue = this.scanValue;
        const thatValue = is.string(value) ? value.padStart(13, '0').slice(0, 12) : value.scanValue;
        // assert(thisValue.length === thatValue.length, 'compared barcode values are not the same length');
        return thisValue === thatValue;
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
    static update(realm: Realm, obj: Barcode): Barcode {
        console.info('Barcode.update');
        const func = () => {
            console.info('Barcode.update - running');
            obj.value = obj.value.padStart(13, '0');
        };
        if (obj.value.length !== 13) {
            runTransaction(realm, func);
        }
        return obj;
    }
    static createFromFullUPC(realm: Realm, value: string, doNotCreate = false): IBarcode {
        const fullBarcode = value.padStart(13, '0');
        const result = realm.objects<IBarcode>($.barcode()).filtered('value == $0', fullBarcode);
        if (result.length > 0) return result[0];
        const [isValidated, type] = classifyBarcode(fullBarcode);
        const obj = {
            _id: new BSON.ObjectId(),
            isValidated,
            type,
            value: fullBarcode
        } as IBarcode;
        let final: RealmObj<IBarcode> | undefined;
        const func = () => {
            final = realm.create<IBarcode>($.barcode(), obj);
        };
        if (!doNotCreate) {
            runTransaction(realm, func);
        }
        return final ?? obj;
    }
    static createFromTruncatedUPC(realm: Realm, value: string, doNotCreate = false) {
        const checkdigit = calculateUPCCheckDigit(value);
        return Barcode.createFromFullUPC(realm, [...value, checkdigit].join(''), doNotCreate);
    }
    static labelProperty = 'value';
}

const h = createMRTColumnHelper<IBarcode>();
const helper = col(h);

export const barcodeColumns: MRT_ColumnDef<IBarcode>[] = [
    helper.pk(),
    helper.string('value', 'Value', barcodeFormatter, { maxLength: 13, required: true }),
    helper.enum('type', 'Type', { options: barcodeTypes, required: true }),
    helper.bool('isValidated', 'Is Validated')
];

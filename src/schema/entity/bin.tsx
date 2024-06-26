import Realm, { BSON } from 'realm';
import { IBarcode, IBin } from '../../types';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { Barcode } from './barcode';
import { runTransaction } from '../../util/runTransaction';
import { EntityBase } from './EntityBase';
import { getInitFor } from './getInitFor';

export class Bin extends EntityBase<IBin> implements IBin {
    static barcodeGenerator: () => string;
    static update(bin: Bin): Bin {
        const func = () => {
            if (Bin.barcodeGenerator == null) {
                throw new Error('barcode generator null on Bin');
            }
            if (bin.barcode == null) {
                console.info('adding barcode to bin');
                bin.addBarcode(Bin.barcodeGenerator);
            }
        };
        runTransaction(Bin.localRealm, func);
        return bin;
    }
    addBarcode(this: IBin, generator: () => string): IBin {
        const bc = Barcode.createFromFullUPC(generator());
        const func = () => {
            this.barcode = bc;
        };
        runTransaction(Barcode.localRealm, func);
        return this;
    }
    _id: BSON.ObjectId;
    barcode: IBarcode;
    name: string;
    notes?: string | undefined;

    static labelProperty = 'name';

    static schema: Realm.ObjectSchema = {
        name: schemaName($.bin()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            barcode: $.barcode(),
            name: $.string(),
            notes: $.string.opt
        }
    };
    static init(): InitValue<IBin> {
        const barcode = getInitFor<IBarcode>(Bin as any, 'barcode');
        return {
            _id: new BSON.ObjectId(),
            name: '',
            barcode: barcode()
        };
    }
}

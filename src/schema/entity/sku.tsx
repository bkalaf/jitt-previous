import Realm from "realm";
import { ObjectId } from 'bson';
import { IAuction, IBarcode, IProduct, IProductImage, IShipping, ISku, Opt } from '../../types';
import { ItemConditions, ItemDispositions, Shippers } from '../enums';
import { barcodeFormatter } from '../../util/barcodeFormatter';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { createMRTColumnHelper } from 'material-react-table';
import { col } from '../defs/col';

export class Sku extends Realm.Object<ISku> implements ISku {
    _id: ObjectId;
    auction?: Opt<IAuction>;
    condition?: Opt<ItemConditions>;
    defects: DBList<string>;
    disposition?: Opt<ItemDispositions>;
    packingPercent?: Opt<number>;
    product?: Opt<IProduct>;
    quantity?: Opt<number>;
    skus: DBList<IBarcode> & [IBarcode];
    shipping?: Opt<IShipping>;
    static labelProperty = 'disposition';
    static schema: Realm.ObjectSchema = {
        name: schemaName($.sku()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            auction: $.auction(),
            condition: $.string.opt,
            defects: $.string.list,
            disposition: $.string.opt,
            packingPercent: $.double.opt,
            product: $.product(),
            quantity: $.int.opt,
            skus: $.barcode.list,
            shipping: $.shipping()
        }
    }
    get getShipping(): Opt<IShipping> {
        return undefined;
    }
    get getShipWeight(): Opt<number> {
        return undefined;
    }
    get getCarrier(): Opt<Shippers> {
        return undefined;
    }
    get getMaxWeight(): Opt<[number, number]> {
        return undefined;
    }
    get getFolder(): string {
        return barcodeFormatter(this.skus[0]);
    }
    get getProductImages(): Realm.Types.LinkingObjects<IProductImage, 'sku'> {
        return this.linkingObjects(schemaName($.productImage()), 'sku') as any;
    }
}

const h = createMRTColumnHelper<ISku>();
const helper = col(h);
export const sku = [
    helper.pk()
]
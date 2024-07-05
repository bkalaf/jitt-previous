import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IHomeGoodsDecorDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';

export class HomeGoodsDecorDetails extends EntityBase<IHomeGoodsDecorDetails> implements IHomeGoodsDecorDetails {
    static columns: MRT_ColumnDef<IProduct>[] = [];
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.homeGoodsDecor,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Home-Goods Decor';
    static type: DetailTypes = 'home-goods/decor';
    static objectType = HomeGoodsDecorDetails.schema.name;
}

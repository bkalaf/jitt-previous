import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IHomeGoodsGlasswareDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';

export class HomeGoodsGlasswareDetails extends EntityBase<IHomeGoodsGlasswareDetails> implements IHomeGoodsGlasswareDetails {
    static columns: MRT_ColumnDef<IProduct>[] = [];
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.homeGoodsGlassware,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Home Goods Glassware';
    static type: DetailTypes = 'home-goods/glassware';
    static objectType = HomeGoodsGlasswareDetails.schema.name;
}

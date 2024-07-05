import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IHomeGoodsDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { homeGoodsDetails } from '../details/homeGoodsDetails';

export class HomeGoodsDetails extends EntityBase<IHomeGoodsDetails> implements IHomeGoodsDetails {
    static columns: MRT_ColumnDef<IProduct>[] = homeGoodsDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.homeGoods,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Home Goods';
    static type: DetailTypes = 'home-goods';
    static objectType = HomeGoodsDetails.schema.name;
}

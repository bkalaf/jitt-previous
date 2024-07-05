import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IProduct, ISportingGoodsDetails } from '../../../types';
import { EntityBase } from './../EntityBase';
import { sportingGoodsDetails } from '../details/sportingGoodsDetails';

export class SportingGoodsDetails extends EntityBase<ISportingGoodsDetails> implements ISportingGoodsDetails {
    static columns: MRT_ColumnDef<IProduct>[] = sportingGoodsDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.sportingGoods,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Sporting-Goods';
    static type: DetailTypes = 'sporting-goods';
    static objectType = SportingGoodsDetails.schema.name;
}

import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IProduct, ISportingGoodsGolfDetails } from '../../../types';
import { EntityBase } from './../EntityBase';

export class SportingGoodsGolfDetails extends EntityBase<ISportingGoodsGolfDetails> implements ISportingGoodsGolfDetails {
    static columns: MRT_ColumnDef<IProduct>[] = [];
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.sportingGoodsGolf,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Sporting-Goods Golf';
    static type: DetailTypes = 'sporting-goods/golf';
    static objectType = SportingGoodsGolfDetails.schema.name;
}

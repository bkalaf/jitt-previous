import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IProduct, ISportingGoodsBowlingDetails } from '../../../types';
import { EntityBase } from './../EntityBase';

export class SportingGoodsBowlingDetails extends EntityBase<ISportingGoodsBowlingDetails> implements ISportingGoodsBowlingDetails {
    static columns: MRT_ColumnDef<IProduct>[] = [];
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.sportingGoodsBowling,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Sporting-Goods Bowling';
    static type: DetailTypes = 'sporting-goods/bowling';
    static objectType = SportingGoodsBowlingDetails.schema.name;
}

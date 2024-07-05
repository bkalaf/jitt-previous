import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IProduct, ISportingGoodsTennisDetails } from '../../../types';
import { EntityBase } from './../EntityBase';

export class SportingGoodsTennisDetails extends EntityBase<ISportingGoodsTennisDetails> implements ISportingGoodsTennisDetails {
    static columns: MRT_ColumnDef<IProduct>[] = [];
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.sportingGoodsTennis,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Sporting-Goods Tennis';
    static type: DetailTypes = 'sporting-goods/tennis';
    static objectType = SportingGoodsTennisDetails.schema.name;
}

import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IProduct, ISportingGoodsTennisRacketsDetails } from '../../../types';
import { EntityBase } from './../EntityBase';

export class SportingGoodsTennisRacketsDetails extends EntityBase<ISportingGoodsTennisRacketsDetails> implements ISportingGoodsTennisRacketsDetails {
    static columns: MRT_ColumnDef<IProduct>[] = [];
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.sportingGoodsTennisRackets,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Tennis Rackets';
    static type: DetailTypes = 'sporting-goods/tennis/rackets';
    static objectType = SportingGoodsTennisRacketsDetails.schema.name;
}

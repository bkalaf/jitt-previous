import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IProduct, ISportingGoodsGolfClubsDetails } from '../../../types';
import { EntityBase } from './../EntityBase';
import { sportingGoodsGolfClubsDetails } from '../details/sportingGoodsDetails';

export class SportingGoodsGolfClubsDetails extends EntityBase<ISportingGoodsGolfClubsDetails> implements ISportingGoodsGolfClubsDetails {
    static columns: MRT_ColumnDef<IProduct>[] = sportingGoodsGolfClubsDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.sportingGoodsGolfClubs,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Golf Clubs';
    static type: DetailTypes = 'sporting-goods/golf/clubs';
    static objectType = SportingGoodsGolfClubsDetails.schema.name;
}

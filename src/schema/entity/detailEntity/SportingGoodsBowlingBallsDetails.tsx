import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IProduct, ISportingGoodsBowlingBallsDetails } from '../../../types';
import { EntityBase } from './../EntityBase';
import { sportingGoodsBowlingBallsColumns } from '../details/sportingGoodsDetails';

export class SportingGoodsBowlingBallsDetails extends EntityBase<ISportingGoodsBowlingBallsDetails> implements ISportingGoodsBowlingBallsDetails {
    static columns: MRT_ColumnDef<IProduct>[] = sportingGoodsBowlingBallsColumns();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.sportingGoodsBowlingBalls,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Bowling Balls';
    static type: DetailTypes = 'sporting-goods/bowling/balls';
    static objectType = SportingGoodsBowlingBallsDetails.schema.name;
}

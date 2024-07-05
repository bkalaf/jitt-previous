import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IHomeGoodsFlatwareDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { homeGoodsFlatwareDetails } from '../details/homeGoodsFlatwareDetails';

export class HomeGoodsFlatwareDetails extends EntityBase<IHomeGoodsFlatwareDetails> implements IHomeGoodsFlatwareDetails {
    static columns: MRT_ColumnDef<IProduct>[] = homeGoodsFlatwareDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.homeGoodsFlatware,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Home Goods Flatware';
    static type: DetailTypes = 'home-goods/flatware';
    static objectType = HomeGoodsFlatwareDetails.schema.name;
}

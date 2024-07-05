import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IHomeGoodsDinnerwareDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { homeGoodsDinnerwareDetails } from '../details/homeGoodsDinnerwareDetails';

export class HomeGoodsDinnerwareDetails extends EntityBase<IHomeGoodsDinnerwareDetails> implements IHomeGoodsDinnerwareDetails {
    static columns: MRT_ColumnDef<IProduct>[] = homeGoodsDinnerwareDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.homeGoodsDinnerware,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Home-Goods Dinnerware';
    static type: DetailTypes = 'home-goods/dinnerware';
    static objectType = HomeGoodsDinnerwareDetails.schema.name;
}

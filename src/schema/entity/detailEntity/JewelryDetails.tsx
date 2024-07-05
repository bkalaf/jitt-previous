import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IJewelryDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { jewelryDetails } from '../details/jewelryDetails';

export class JewelryDetails extends EntityBase<IJewelryDetails> implements IJewelryDetails {
    static columns: MRT_ColumnDef<IProduct>[] = jewelryDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.jewelry,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Jewelry';
    static type: DetailTypes = 'jewelry';
    static objectType = JewelryDetails.schema.name;
}

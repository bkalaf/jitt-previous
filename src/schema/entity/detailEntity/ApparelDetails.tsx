import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IApparelDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { apparelDetails } from '../details/apparelDetails';

export class ApparelDetails extends EntityBase<IApparelDetails> implements IApparelDetails {
    static columns: MRT_ColumnDef<IProduct>[] = apparelDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.apparel,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    }
    static label = 'Apparel';
    static type: DetailTypes = 'apparel';
    static objectType = ApparelDetails.schema.name;
}


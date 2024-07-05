import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, ICablesDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { cablesDetails } from '../details/cablesDetails';

export class CablesDetails extends EntityBase<ICablesDetails> implements ICablesDetails {
    static columns: MRT_ColumnDef<IProduct>[] = cablesDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.cables,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Cables';
    static type: DetailTypes = 'cables';
    static objectType = CablesDetails.schema.name;
}

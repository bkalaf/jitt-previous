import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, ICablesDataDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { cablesDataDetails } from '../details/cablesDataDetails';

export class CablesDataDetails extends EntityBase<ICablesDataDetails> implements ICablesDataDetails {
    static columns: MRT_ColumnDef<IProduct>[] = cablesDataDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.cablesData,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Cables Data';
    static type: DetailTypes = 'cables/data';
    static objectType = CablesDataDetails.schema.name;
}

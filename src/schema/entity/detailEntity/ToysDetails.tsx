import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IProduct, IToysDetails } from '../../../types';
import { EntityBase } from './../EntityBase';
import { toysDetails } from '../details/toysDetails';

export class ToysDetails extends EntityBase<IToysDetails> implements IToysDetails {
    static columns: MRT_ColumnDef<IProduct>[] = toysDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.toys,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Toys';
    static type: DetailTypes = 'toys';
    static objectType = ToysDetails.schema.name;
}

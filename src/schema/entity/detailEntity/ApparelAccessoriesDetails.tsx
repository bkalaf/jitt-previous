import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IApparelAccessoriesDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { apparelAccessoriesDetailsColumns } from '../details/apparelAccessoriesDetailsColumns';


export class ApparelAccessoriesDetails extends EntityBase<IApparelAccessoriesDetails> implements IApparelAccessoriesDetails {
    static columns: MRT_ColumnDef<IProduct>[] = apparelAccessoriesDetailsColumns();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.apparelAccessories,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Apparel Accessories';
    static type: DetailTypes = 'apparel/accessories';
    static objectType = ApparelAccessoriesDetails.schema.name;
}

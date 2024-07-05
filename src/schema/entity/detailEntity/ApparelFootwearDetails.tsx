import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IApparelFootwearDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { apparelFootwear } from '../details/apparelFootwear';

export class ApparelFootwearDetails extends EntityBase<IApparelFootwearDetails> implements IApparelFootwearDetails {
    static columns: MRT_ColumnDef<IProduct>[] = apparelFootwear();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.apparelFootwear,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Apparel Footwear';
    static type: DetailTypes = 'apparel/footwear';
    static objectType = ApparelFootwearDetails.schema.name;
}

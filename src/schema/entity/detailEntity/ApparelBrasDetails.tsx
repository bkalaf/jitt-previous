import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IApparelBrasDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { apparelBras } from '../details/apparelBras';

export class ApparelBrasDetails extends EntityBase<IApparelBrasDetails> implements IApparelBrasDetails {
    static columns: MRT_ColumnDef<IProduct>[] = apparelBras();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.apparelBras,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Apparel Bras';
    static type: DetailTypes = 'apparel/bras';
    static objectType = ApparelBrasDetails.schema.name;
}

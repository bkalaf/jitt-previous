import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IApparelBrasSwimsuitDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';

export class ApparelBrasSwimsuitDetails extends EntityBase<IApparelBrasSwimsuitDetails> implements IApparelBrasSwimsuitDetails {
    static columns: MRT_ColumnDef<IProduct>[] = [];
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.apparelBrasSwimsuit,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Apparel Bras Swimsuit';
    static type: DetailTypes = 'apparel/bras/swimsuit';
    static objectType = ApparelBrasSwimsuitDetails.schema.name;
}

import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IApparelTopsDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { apparelTops } from '../details/apparelTops';

export class ApparelTopsDetails extends EntityBase<IApparelTopsDetails> implements IApparelTopsDetails {
    static columns: MRT_ColumnDef<IProduct>[] = apparelTops();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.apparelTops,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Apparel Tops';
    static type: DetailTypes = 'apparel/tops';
    static objectType = ApparelTopsDetails.schema.name;
}

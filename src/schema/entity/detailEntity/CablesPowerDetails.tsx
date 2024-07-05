import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, ICablesPowerDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { cablesPowerDetails } from '../details/cablesPowerDetails';

export class CablesPowerDetails extends EntityBase<ICablesPowerDetails> implements ICablesPowerDetails {
    static columns: MRT_ColumnDef<IProduct>[] = cablesPowerDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.cablesPower,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };

    static label = 'Cables Power';
    static type: DetailTypes = 'cables/power';
    static objectType = CablesPowerDetails.schema.name;
}

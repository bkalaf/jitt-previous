import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, ICablesVideoDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { cablesVideoDetails } from '../details/cablesVideoDetails';

export class CablesVideoDetails extends EntityBase<ICablesVideoDetails> implements ICablesVideoDetails {
    static columns: MRT_ColumnDef<IProduct>[] = cablesVideoDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.cablesVideo,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Cables Video';
    static type: DetailTypes = 'cables/video';
    static objectType = CablesVideoDetails.schema.name;
}

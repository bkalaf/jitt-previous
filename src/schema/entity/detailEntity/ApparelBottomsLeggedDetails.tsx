import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IApparelBottomsLeggedDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { apparelDetails } from '../details/apparelDetails';

export class ApparelBottomsLeggedDetails extends EntityBase<IApparelBottomsLeggedDetails> implements IApparelBottomsLeggedDetails {
    static columns: MRT_ColumnDef<IProduct>[] = apparelDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.apparelBottomsLegged,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Apparel Bottoms Legged';
    static type: DetailTypes = 'apparel/bottoms/legged';
    static objectType = ApparelBottomsLeggedDetails.schema.name;
}

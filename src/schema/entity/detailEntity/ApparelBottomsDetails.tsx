import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IApparelBottomsDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { apparelBottoms } from '../details/apparelBottoms';

export class ApparelBottomsDetails extends EntityBase<IApparelBottomsDetails> implements IApparelBottomsDetails {
    static columns: MRT_ColumnDef<IProduct>[] = apparelBottoms();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.apparelBottoms,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Apparel Bottoms';
    static type: DetailTypes = 'apparel/bottoms';
    static objectType = ApparelBottomsDetails.schema.name;
}

import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IGeneralDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { generalDetails } from '../details/generalDetails';

export class GeneralDetails extends EntityBase<IGeneralDetails> implements IGeneralDetails {
    static columns: MRT_ColumnDef<IProduct>[] = generalDetails();
    static label = 'General';
    static type: DetailTypes = 'general';
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.general,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static objectType = GeneralDetails.schema.name;
}

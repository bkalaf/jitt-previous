import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IElectronicsDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { electronicsDetails } from '../details/electronicsDetails';

export class ElectronicsDetails extends EntityBase<IElectronicsDetails> implements IElectronicsDetails {
    static columns: MRT_ColumnDef<IProduct>[] = electronicsDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.electronics,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Electronics';
    static type: DetailTypes = 'electronics';
    static objectType = ElectronicsDetails.schema.name;
}

import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IElectronicsVisualDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { electronicsVisualDetails } from '../details/cellPhoneDetails';

export class ElectronicsVisualDetails extends EntityBase<IElectronicsVisualDetails> implements IElectronicsVisualDetails {
    static columns: MRT_ColumnDef<IProduct>[] = electronicsVisualDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.electronicsVisual,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Electronics Visual';
    static type: DetailTypes = 'electronics/visual';
    static objectType = ElectronicsVisualDetails.schema.name;
}

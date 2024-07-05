import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IElectronicsVisualCellPhonesDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { electronicsVisualCellPhonesDetails } from '../details/cellPhoneDetails';

export class ElectronicsVisualCellPhonesDetails extends EntityBase<IElectronicsVisualCellPhonesDetails> implements IElectronicsVisualCellPhonesDetails {
    static columns: MRT_ColumnDef<IProduct>[] = electronicsVisualCellPhonesDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.electronicsVisualCellPhones,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Electronics Visual Cell Phones';
    static type: DetailTypes = 'electronics/visual/cell-phones';
    static objectType = ElectronicsVisualCellPhonesDetails.schema.name;
}

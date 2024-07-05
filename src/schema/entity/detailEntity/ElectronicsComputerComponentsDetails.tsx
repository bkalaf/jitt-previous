import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IElectronicsComputerComponentsDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { electronicsComputerComponentsDetails } from '../details/computerComponentsDetails';

export class ElectronicsComputerComponentsDetails extends EntityBase<IElectronicsComputerComponentsDetails> implements IElectronicsComputerComponentsDetails {
    static columns: MRT_ColumnDef<IProduct>[] = electronicsComputerComponentsDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.electronicsComputerComponents,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Electronics Computer Components';
    static type: DetailTypes = 'electronics/computer-components';
    static objectType = ElectronicsComputerComponentsDetails.schema.name;
}

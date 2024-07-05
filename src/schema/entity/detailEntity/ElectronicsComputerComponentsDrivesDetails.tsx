import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IElectronicsComputerComponentsDrivesDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { electronicsComputerComponentsDrivesDetails } from '../details/computerComponentsDrivesDetails';

export class ElectronicsComputerComponentsDrivesDetails extends EntityBase<IElectronicsComputerComponentsDrivesDetails> implements IElectronicsComputerComponentsDrivesDetails {
    static columns: MRT_ColumnDef<IProduct>[] = electronicsComputerComponentsDrivesDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.electronicsComputerComponentsDrives,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Computer-Components Drives';
    static type: DetailTypes = 'electronics/computer-components/drives';
    static objectType = ElectronicsComputerComponentsDrivesDetails.schema.name;
}

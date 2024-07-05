import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IElectronicsComputerComponentsRamDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { electronicsComputerComponentsRamDetails } from '../details/computerComponentsRamDetails';

export class ElectronicsComputerComponentsRamDetails extends EntityBase<IElectronicsComputerComponentsRamDetails> implements IElectronicsComputerComponentsRamDetails {
    static columns: MRT_ColumnDef<IProduct>[] = electronicsComputerComponentsRamDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.electronicsComputerComponentsRAM,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Electronics Computer Components R A M';
    static type: DetailTypes = 'electronics/computer-components/ram';
    static objectType = ElectronicsComputerComponentsRamDetails.schema.name;
}

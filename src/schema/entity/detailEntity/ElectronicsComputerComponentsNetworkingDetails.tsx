import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IElectronicsComputerComponentsNetworkingDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';

export class ElectronicsComputerComponentsNetworkingDetails extends EntityBase<IElectronicsComputerComponentsNetworkingDetails> implements IElectronicsComputerComponentsNetworkingDetails {
    static columns: MRT_ColumnDef<IProduct>[] = [];
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.electronicsComputerComponentsNetworking,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Computer-Components Networking';
    static type: DetailTypes = 'electronics/computer-components/networking';
    static objectType = ElectronicsComputerComponentsNetworkingDetails.schema.name;
}

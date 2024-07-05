import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IElectronicsComputerComponentsBatteryDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { electronicsComputerComponentsBatteryDetails } from '../details/electronicsComputerComponentsBatteryDetails';

export class ElectronicsComputerComponentsBatteryDetails extends EntityBase<IElectronicsComputerComponentsBatteryDetails> implements IElectronicsComputerComponentsBatteryDetails {
    static columns: MRT_ColumnDef<IProduct>[] = electronicsComputerComponentsBatteryDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.electronicsComputerComponentsBattery,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Computer-Components Battery';
    static type: DetailTypes = 'electronics/computer-components/battery';
    static objectType = ElectronicsComputerComponentsBatteryDetails.schema.name;
}

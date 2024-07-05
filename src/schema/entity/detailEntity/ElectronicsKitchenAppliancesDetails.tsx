import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IElectronicsKitchenAppliancesDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { electronicsKitchenAppliancesDetails } from '../details/kitchenAppliancesDetails';

export class ElectronicsKitchenAppliancesDetails extends EntityBase<IElectronicsKitchenAppliancesDetails> implements IElectronicsKitchenAppliancesDetails {
    static columns: MRT_ColumnDef<IProduct>[] = electronicsKitchenAppliancesDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.electronicsKitchenAppliances,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Kitchen-Appliances';
    static type: DetailTypes = 'electronics/kitchen-appliances';
    static objectType = ElectronicsKitchenAppliancesDetails.schema.name;
}

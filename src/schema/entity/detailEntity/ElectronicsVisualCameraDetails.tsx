import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IElectronicsVisualCameraDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { electronicsVisualCameraDetails } from '../details/electronicsVisualCameraDetails';


export class ElectronicsVisualCameraDetails extends EntityBase<IElectronicsVisualCameraDetails> implements IElectronicsVisualCameraDetails {
    static columns: MRT_ColumnDef<IProduct>[] = electronicsVisualCameraDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.electronicsVisualCamera,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Electronics Visual Camera';
    static type: DetailTypes = 'electronics/visual/camera';
    static objectType = ElectronicsVisualCameraDetails.schema.name;
}

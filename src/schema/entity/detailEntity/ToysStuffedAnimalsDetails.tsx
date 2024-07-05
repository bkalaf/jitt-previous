import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IProduct, IToysStuffedAnimalsDetails } from '../../../types';
import { EntityBase } from './../EntityBase';

export class ToysStuffedAnimalsDetails extends EntityBase<IToysStuffedAnimalsDetails> implements IToysStuffedAnimalsDetails {
    static columns: MRT_ColumnDef<IProduct>[] = [];
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.toysStuffedAnimals,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Toys Stuffed-Animals';
    static type: DetailTypes = 'toys/stuffed-animals';
    static objectType = ToysStuffedAnimalsDetails.schema.name;
}

import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../$';
import { is } from '../../common/is';
import { IBrand, IPartNumber } from '../../types';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import Realm from 'realm';
import { partNumberColumns } from '../columns/partNumber';

export class PartNumber extends EntityBase<IPartNumber> implements IPartNumber {
    static columns: MRT_ColumnDef<IPartNumber>[] = partNumberColumns();
    brand: Opt<IBrand>;
    partNumber: string;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.partNumber()),
        embedded: true,
        properties: {
            brand: $.brand(),
            partNumber: $.string()
        }
    }
    static update(item: IPartNumber) {
        return item;
    }
    static stringify = (value?: IPartNumber, returnUndefined = false) => () => value == null ? returnUndefined ? undefined : '' : [value.brand?.name, value.partNumber].filter(is.not.nil).join(' ');
    static liComponent = PartNumber.stringify;
    static init(): InitValue<IPartNumber> {
        return {
            partNumber: ''
        }
    }
}
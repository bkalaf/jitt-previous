import { $ } from '../$';
import { is } from '../../common/is';
import { IBrand, IPartNumber, Opt } from '../../types';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import Realm from 'realm';

export class PartNumber extends EntityBase<IPartNumber> implements IPartNumber {
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
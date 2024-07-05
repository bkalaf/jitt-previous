import Realm from 'realm';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { IAddress } from '../../types';
import { is } from '../../common/is';
import { getCityState } from '../../util/getCityState';
import { Countries, Provinces } from '../enums';
import { EntityBase } from './EntityBase';
import { addressColumns } from '../columns/address';
import { MRT_ColumnDef } from 'material-react-table';

export class Address extends EntityBase<IAddress> {
    static init(): InitValue<IAddress> {
        return {
            city: '',
            province: 'CA',
            country: 'US'
        };
    }
    mailing1?: string | undefined;
    mailing2?: string | undefined;
    suite?: string | undefined;
    city: string;
    province: Provinces;
    country: Countries;
    postalCode?: string | undefined;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.address()),
        embedded: true,
        properties: {
            mailing1: $.string.opt,
            mailing2: $.string.opt,
            suite: $.string.opt,
            city: $.string.opt,
            province: $.string.opt,
            country: $.string.opt,
            postalCode: $.string.opt
        }
    };
    static stringify = (value?: IAddress) => () => [value?.mailing1, value?.mailing2, [getCityState(value), value?.postalCode].filter(is.not.nil).join(' ')].filter(is.not.nil).join('\n');
    static liComponent = Address.stringify;
    static update(item: IAddress): IAddress {
        return item;
    }
    static columns = addressColumns() as MRT_ColumnDef<IAddress>[];
}

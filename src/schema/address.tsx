import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { $ } from './$';
import { schemaName } from '../util/schemaName';
import { createSelectControl, createStringControl } from '../components/controls/createStringControl';
import { provinces } from './enums/provinces';
import { countries } from './enums/countries';
import { toOptions } from '../util/toOptions';
import { IAddress } from '../types';

export const address: Realm.ObjectSchema = {
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
}

const helper = createMRTColumnHelper<IAddress>();

export const addressColumns = [
    helper.accessor('mailing1', { header: 'Mailing 1', Edit: createStringControl({ maxLength: 100 }) }),
    helper.accessor('mailing2', { header: 'Mailing 2', Edit: createStringControl({ maxLength: 100 }) }),
    helper.accessor('suite', { header: 'Suite', Edit: createStringControl({ maxLength: 50 }) }),
    helper.accessor('city', { header: 'City', Edit: createStringControl({ maxLength: 60, required: true }) }),
    helper.accessor('province', { header: 'Province', Edit: createSelectControl({ options: toOptions(provinces) })}),
    helper.accessor('country', { header: 'Country', Edit: createSelectControl({ options: toOptions(countries) })}),
    helper.accessor('postalCode', { header: 'Postal Code', Edit: createStringControl({ maxLength: 10, pattern: /^[0-9]{5}(-?[0-9]{4})?$|^[A-Z][0-9][A-Z]-?[0-9][A-Z][0-9]$/ }) })
] as MRT_ColumnDef<IAddress>[];

// export const reg = /^[0-9]{5}$|^[A-Z][0-9][A-Z]-?[0-9][A-Z][0-9]$/
// console.log(reg.test('A1A-1A1'))
// console.log(reg.test('91207'))

export function getCityState(address?: IAddress) {
    return address ? [address?.city, address?.province].filter(x => x != null).join(', ') : undefined;
}
export function getStreetOnly(address?: IAddress) {
    return address?.mailing1?.split(' ').slice(1).join(' ');
}
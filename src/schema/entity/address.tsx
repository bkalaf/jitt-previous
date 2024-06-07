import Realm from "realm";
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { IAddress } from '../../types';
import { is } from '../../common/is';
import { getCityState } from '../../util/getCityState';

export class Address extends Realm.Object<IAddress> implements IAddress {
    mailing1?: string | undefined;
    mailing2?: string | undefined;
    suite?: string | undefined;
    city: string;
    province: string;
    country: string;
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
    static liComponent = (value?: IAddress) => () => [value?.mailing1, value?.mailing2, [getCityState(value), value?.postalCode].filter(is.not.nil).join(' ')].filter(is.not.nil).join('\n');
}

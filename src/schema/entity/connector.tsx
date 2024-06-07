import Realm from "realm";
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';

export const connector: Realm.ObjectSchema = {
    name: schemaName($.connector()),
    embedded: true,
    properties: {
        connectorGender: $.string.opt,
        innerWidth: $.double.opt,
        outerWidth: $.double.opt,
        type: $.string.opt
    }
}

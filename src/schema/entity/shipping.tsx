import Realm from "realm";
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';

export const shippingSchema: Realm.ObjectSchema = {
    name: schemaName($.shipping()),
    embedded: true,
    properties: {
        id: $.int(),
        version: $.int()
    }
}
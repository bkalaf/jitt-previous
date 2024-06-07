import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import Realm from "realm";

export const hashTagUsage: Realm.ObjectSchema  = {
    name: schemaName($.hashTagUsage()),
    embedded: true,
    properties: {
        from: $.date(),
        count: $.int.default(0)
    }
}

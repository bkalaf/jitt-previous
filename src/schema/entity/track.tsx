import Realm from "realm";
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';

export const trackSchema: Realm.ObjectSchema = {
    name: schemaName($.track()),
    embedded: true,
    properties: {
        feat: $.string.list,
        index: $.int(),
        name: $.string.opt,
        runtimeSecs: $.int.opt
    }
}


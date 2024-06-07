import Realm from 'realm';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';

export const minMax: Realm.ObjectSchema = {
    name: schemaName($.minMax()),
    embedded: true,
    properties: {
        min: $.int.opt,
        max: $.int.opt
    }
};

import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';

// ex: CustomItemFieldId-Platform

export const customItemField: Realm.ObjectSchema = {
    name: schemaName($.customItemField()),
    embedded: true,
    properties: {
        name: $.string(),
        id: $.string(),
        value: $.string()
    }
};

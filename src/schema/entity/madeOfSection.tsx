import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';

export const madeOfSection: Realm.ObjectSchema = {
    name: schemaName($.madeOfSection()),
    embedded: true,
    properties: {
        name: $.string.opt,
        section: $.double.dictionary
    }
};

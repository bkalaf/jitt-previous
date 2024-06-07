import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';

export const clothingCare: Realm.ObjectSchema = {
    name: schemaName($.clothingCare()),
    embedded: true,
    properties: {
        bleaching: $.string.list,
        dryClean: $.string.list,
        drying: $.string.list,
        gentleOrDelicate: $.string.list,
        ironing: $.string.list,
        permanentPress: $.string.list,
        tumbleDry: $.string.list,
        wash: $.string.list,
        washTemperature: $.string.list
    }
};

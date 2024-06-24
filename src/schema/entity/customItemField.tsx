import Realm, { BSON } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { ICustomItemField, ICustomItemFieldTypes, IMercariTaxonomy, Opt } from '../../types';
import { EntityBase } from './EntityBase';

// ex: CustomItemFieldId-Platform

export class CustomItemField extends EntityBase<ICustomItemField> implements ICustomItemField {
    linkedType: Opt<string>;
    brandsMap: DBDictionary<ICustomItemFieldTypes>;
    get getTaxonomy(): Realm.Types.LinkingObjects<IMercariTaxonomy, 'customItemField'> {
        return this.linkingObjects(schemaName($.mercariTaxonomy()), 'customItemField') as any;
    }
    _id: BSON.ObjectId;
    id: string;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.customItemField()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            linkedType: $.string.opt,
            id: $.string(),
            brandsMap: $.customItemFieldTypes.dictionary
        }
    };
    static liComponent = (value?: ICustomItemField) => () => (value == null ? '' : [value.id].join(' - '));
    static update(item:ICustomItemField) {
        return item;
    }
    static init(): InitValue<ICustomItemField> {
        return {
            _id: new BSON.ObjectId(),
            brandsMap: {},
            id: ''
        }
    }
}

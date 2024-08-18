import Realm, { BSON } from 'realm';
import { IClassification, IMercariTaxonomy } from '../../types';
import { EntityBase } from './EntityBase';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { runTransaction } from '../../util/runTransaction';

export class Classification extends EntityBase<IClassification> implements IClassification {
    _id: BSON.ObjectId;
    path: DBList<string>;
    attributes: DBDictionary<string>;
    flags: DBList<string>;
    itemType: string;
    taxonomy: Opt<IMercariTaxonomy>;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.classification()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            path: $.string.list,
            flags: $.string.list,
            attributes: $.string.dictionary,
            itemType: $.string.opt,
            taxonomy: $.mercariTaxonomy()
        }
    };
    static ctor(values: { path: string[], flags: string[], attributes: Record<string, string>, itemType: string, taxonomy: string }) {
        return new Promise<RealmObj<IClassification>>((resolve) => {
            const realm = Classification.localRealm;
            const func = () => {
                const taxons = realm.objects<IMercariTaxonomy>('mercariTaxonomy').filtered('fullname == $0', values.taxonomy);
                const result = realm.create<IClassification>('classification', {
                    _id: new BSON.ObjectId(),
                    path: values.path,
                    flags: values.flags,
                    attributes: values.attributes,
                    itemType: values.itemType,
                    taxonomy: taxons.length > 0 ? taxons[0] : undefined
                });
                return resolve(result);
            };
            runTransaction(realm, func);
        })
    }
    static init(): InitValue<IClassification> {
        return {
            _id: new BSON.ObjectId(),
            flags: [],
            path: [],
            attributes: {},
            itemType: ''
        }
    }
    static update(item: IClassification) {
        return item;
    }
    static stringify = (value?: IClassification, returnUndef = false) => () => value == null ? returnUndef ? undefined : '' : [value.path.join('::'), Object.entries(value.attributes).map(([k, v]) => [k, v].join(':')).join(','), value.flags.join(','), value.itemType].join(' ');
    static liComponent = Classification.stringify;
}
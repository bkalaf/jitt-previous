import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { DetailTypes, IAttribute, IClassifier, IHashTag, IMercariTaxonomy } from '../../types';
import { ObjectId } from 'bson';
import { runTransaction } from '../../util/runTransaction';
import { distinctBy, distinctByOID } from '../../common/array/distinct';

export class Classifier extends Realm.Object<IClassifier> implements IClassifier {
    // subRows: Realm.Types.LinkingObjects<IClassifier, 'parent'>;
    _id: ObjectId;
    taxonomy?: IMercariTaxonomy | undefined;
    shortName: string;
    parent?: Pick<IClassifier, '_id' | 'shortName' | 'name' | 'hashTags' | 'allHashTags' | 'detailTypes' | 'allAttributes'> | undefined;
    name: string;
    type: DBList<DetailTypes>;
    attributes: DBList<IAttribute>;
    hashTags: DBList<IHashTag>;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.classifier()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            taxonomy: $.mercariTaxonomy(),
            shortName: $.string(),
            parent: $.classifier(),
            name: $.string(),
            type: $.string.list,
            attributes: $.attribute.list,
            hashTags: $.hashTag.list
        }
    };
    static labelProperty = 'name';

    static update(realm: Realm, item: IClassifier): IClassifier {
        const func = () => {
            const name = [item.parent?.name, item.shortName].join(' || ');
            if (name !== item.name) {
                item.name = name;
            }
        };
        runTransaction(realm, func);
        return item;
    }
    get allHashTags(): IHashTag[] {
        return distinctByOID<IHashTag>([...this.hashTags, ...(this.taxonomy?.allHashTags ?? []), ...(this.parent?.allHashTags ?? [])]);
    }
    get detailTypes(): DetailTypes[] {
        return distinctBy((left: string, right: string) => left === right, [...(this?.parent?.detailTypes ?? []), ...(this.type ?? [])]);
    }
    get allAttributes(): IAttribute[] {
        return distinctBy((left: IAttribute, right: IAttribute) => left.path === right.path, [...(this?.parent?.allAttributes ?? []), ...(this.attributes ?? [])]);
    }
    get subRows(): Realm.Results<any> {
        // const key = Object.getOwnPropertySymbols(this).find(x => x.toString().includes('#realm'))
        // if (key == null) throw new Error('cannot find symbol')
        return this.linkingObjects('classifier', 'parent');
    }
}

import Realm, { BSON } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { DetailTypes, IAttribute, IClassifier, IHashTag, IMercariTaxonomy } from '../../types';
import { runTransaction } from '../../util/runTransaction';
import { distinctBy, distinctByOID } from '../../common/array/distinct';
import { EntityBase } from './EntityBase';
import { MRT_ColumnDef } from 'material-react-table';
import { classifierColumns } from '../columns/classifier';

export class Classifier extends EntityBase<IClassifier> implements IClassifier {
    static matchKeys: (string | keyof IClassifier)[] = [
        'shortName', 'name', '_id'
    ]
    static columns: MRT_ColumnDef<IClassifier>[] = classifierColumns();
    // subRows: Realm.Types.LinkingObjects<IClassifier, 'parent'>;
    _id: BSON.ObjectId;
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

    static update(item: IClassifier): IClassifier {
        const func = () => {
            const name = [item.parent?.name, item.shortName].join(' || ');
            if (name !== item.name) {
                item.name = name;
            }
        };
        runTransaction(Classifier.localRealm, func);
        return item;
    }
    static init(): InitValue<IClassifier> {
        return {
            _id: new BSON.ObjectId(),
            shortName: '',
            name: '',
            hashTags: [],
            type: [],
            attributes: []
        };
    }
    get allHashTags(): IHashTag[] {
        return distinctByOID<IHashTag>([...this.hashTags, ...(this.taxonomy?.allHashTags ?? []), ...(this.parent?.allHashTags ?? [])]);
    }
    get detailTypes(): DetailTypes[] {
        return distinctBy((left: string, right: string) => left === right, [...(this?.parent?.detailTypes ?? []), ...(this.type ?? [])]);
    }
    get allAttributes(): IAttribute[] {
        const map = new Map<string, IAttribute>();
        distinctBy((left: IAttribute, right: IAttribute) => left.path === right.path, [...(this?.parent?.allAttributes ?? []), ...(this.attributes ?? [])]).forEach((x) => map.set(x.path, x));
        return Array.from(map.values());
    }
    get subRows(): Realm.Results<any> {
        // const key = Object.getOwnPropertySymbols(this).find(x => x.toString().includes('#realm'))
        // if (key == null) throw new Error('cannot find symbol')
        return this.linkingObjects('classifier', 'parent');
    }
}

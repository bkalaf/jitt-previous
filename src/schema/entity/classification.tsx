import Realm, { BSON } from 'realm';
import { IClassification, IHashTag, IHashTagAssignment, IHashTagCondition, IMercariTaxonomy, IProduct } from '../../types';
import { EntityBase } from './EntityBase';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { runTransaction } from '../../util/runTransaction';
import { dbListCompare } from '../../components/Tabs/createClassifyTabPanel';
import { MRT_ColumnDef } from 'material-react-table';
import { distinctByOID, distinctByString } from '../../common/array/distinct';
import { classificationColumns } from '../columns/classification';

export class Classification extends EntityBase<IClassification> implements IClassification {
    hashTagConditions: DBList<IHashTagCondition>;
    get allHashTagConditions(): IHashTagCondition[] {
        return [...this.hashTagConditions, ...this.parent?.hashTagConditions ?? []]
    }
    match(product: IProduct): IHashTag[] {
        const assignments = this.allHashTagAssignments.map(x => x.match(product)).reduce((pv, cv) => [...pv, ...cv], []);
        return distinctByOID([...this.allHashTags, ...assignments])
    }
    hashTagAssignments: DBList<IHashTagAssignment>;
    parent: Opt<IClassification>;
    get subRows(): Realm.Results<IClassification> {
        // const result = Classification.localRealm.objects<IClassification>('classification').filtered('parent == $0', this);
        // console.log(`subRows`, result);
        // return result as any; 
        return this.linkingObjects<IClassification>('classification', 'parent') as any;
    }
    hashTags: DBList<IHashTag>;
    additionalPaths: DBList<string>;
    get paths(): string[] {
        const materializedPath = this.path.join('/');
        return distinctByString([materializedPath === '' ? 'general' : materializedPath, ...(this.additionalPaths ?? []), ...(this.parent?.paths ?? [])]);
    }
    get allHashTagAssignments(): IHashTagAssignment[] {
        return [...this.hashTagAssignments, ...this?.parent?.hashTagAssignments ?? []];
    }
    get allHashTags(): IHashTag[] {
        return distinctByOID([...this.parent?.allHashTags ?? [], ...this.hashTags ?? []])
    }
    _id: BSON.ObjectId;
    path: DBList<string>;
    attributes: DBDictionary<string>;
    flags: DBList<string>;
    itemType: string;
    taxonomy: Opt<IMercariTaxonomy>;
    static labelProperty: string = 'itemType';
    static columns: MRT_ColumnDef<any>[] = classificationColumns();
    static schema: Realm.ObjectSchema = {
        name: schemaName($.classification()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            path: $.string.list,
            flags: $.string.list,
            attributes: $.string.dictionary,
            itemType: $.string.opt,
            taxonomy: $.mercariTaxonomy(),
            parent: $.classification(),
            hashTags: $.hashTag.list,
            additionalPaths: $.string.list,
            hashTagAssignments: $.hashTagAssignment.list,
            hashTagConditions: $.hashTagCondition.list
        }
    };
    static ctor(values: { path: string[]; flags: string[]; attributes: Record<string, string>; itemType: string; taxonomy: string }) {
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
        });
    }
    static init(): InitValue<IClassification> {
        return {
            _id: new BSON.ObjectId(),
            flags: [],
            path: [],
            attributes: {},
            itemType: '',
            hashTags: [],
            additionalPaths: [],
            hashTagAssignments: [],
            hashTagConditions: []
        };
    }
    static update(item: IClassification) {
        return item;
    }
    static stringify =
        (value?: IClassification, returnUndef = false) =>
        () =>
            value == null ?
                returnUndef ? undefined
                :   ''
            :   [
                    value.path.join('::'),
                    Object.entries(value.attributes)
                        .map(([k, v]) => [k, v].join(':'))
                        .join(','),
                    value.flags.join(','),
                    value.itemType
                ].join(' ');
    static liComponent = Classification.stringify;
    equalTo(this: Omit<IClassification, '_id'>, other: Omit<InitValue<IClassification>, '_id'>) {
        const { attributes: thisAttributes, flags: thisFlags, path: thisPath, itemType: thisItemType } = this;
        const { attributes: otherAttributes, flags: otherFlags, path: otherPath, itemType: otherItemType } = other;
        const match1 = dbListCompare(thisPath, otherPath);
        const match2 = otherFlags.length === 0 || otherFlags.every((flag) => thisFlags.includes(flag));
        const match3 = Object.entries(otherAttributes).length === 0 || Object.entries(otherAttributes).every(([k, v]) => thisAttributes[k] === v);
        const match4 = thisItemType === otherItemType;
        return (
            match1 ?
                match2 ?
                    match3 ? match4
                    :   false
                :   false
            :   false
        );
    }
}
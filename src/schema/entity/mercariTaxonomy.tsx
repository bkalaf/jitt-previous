import Realm, { BSON } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { IApparelSize, ICustomItemField, IHashTag, IMercariCategory, IMercariTaxonomy } from '../../types';
import { runTransaction } from '../../util/runTransaction';
import { EntityBase } from './EntityBase';
import { getInitFor } from './getInitFor';
import { MRT_ColumnDef } from 'material-react-table';
import { mercariTaxonomyColumns } from '../columns/mercariTaxonomy';

export class MercariTaxonomy extends EntityBase<IMercariTaxonomy> implements IMercariTaxonomy {
    static columns: MRT_ColumnDef<IMercariTaxonomy>[] = mercariTaxonomyColumns();
    sizes: DBList<IApparelSize>;
    customItemField: Opt<ICustomItemField>;
    _id: BSON.ObjectId;
    category?: IMercariCategory;
    subCategory?: IMercariCategory;
    subSubCategory?: IMercariCategory;
    hashTags: DBList<IHashTag>;
    fullname: string;
    timestamp?: Date | undefined;
    allHashTags: IHashTag[];

    static labelProperty = 'fullname';
    static schema: Realm.ObjectSchema = {
        name: schemaName($.mercariTaxonomy()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            category: $.mercariCategory(),
            subCategory: $.mercariCategory(),
            subSubCategory: $.mercariCategory(),
            hashTags: $.hashTag.list,
            fullname: $.string(),
            timestamp: $.date.opt,
            customItemField: $.customItemField(),
            sizes: $.apparelSize.list
        }
    };

    static update(item: IMercariTaxonomy): IMercariTaxonomy {
        const func = () => {
            const fullname = [item?.category?.name, item?.subCategory?.name, item?.subSubCategory?.name].filter((x) => x != null).join('::');
            // console.info(`update-taxonomy`, item, fullname);
            if (item.fullname !== fullname) {
                item.fullname = fullname;
            }
        };
        runTransaction(MercariTaxonomy.localRealm, func);
        return item;
    }
    static init(): InitValue<IMercariTaxonomy> {
        const mercariCategory = getInitFor<IMercariCategory>(MercariTaxonomy as any, 'mercariCategory');
        return {
            _id: new BSON.ObjectId(),
            fullname: '',
            hashTags: [],
            category: mercariCategory(),
            subCategory: mercariCategory(),
            subSubCategory: mercariCategory(),
            timestamp: new Date(Date.now()),
            sizes: []
        };
    }
}

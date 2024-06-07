import Realm, { BSON } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { IHashTag, IMercariCategory, IMercariTaxonomy } from '../../types';
import { runTransaction } from '../../util/runTransaction';

export class MercariTaxonomy extends Realm.Object<IMercariTaxonomy> implements IMercariTaxonomy {
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
            timestamp: $.date.opt
        }
    };

    static update(realm: Realm, item: IMercariTaxonomy): IMercariTaxonomy {
        const func = () => {
            const fullname = [item?.category?.name, item?.subCategory?.name, item?.subSubCategory?.name].filter((x) => x != null).join('::');
            console.info(`update-taxonomy`, item, fullname);
            if (item.fullname !== fullname) {
                item.fullname = fullname;
            }
        };
        runTransaction(realm, func);
        return item;
    }
}

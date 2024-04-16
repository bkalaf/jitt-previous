import Realm from 'realm';
import { schemaName } from '../util/schemaName';
import { $ } from './$';
import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IHashTag, IMercariCategory, IMercariTaxonomy } from '../types';
import { col } from './defs/col';
import dayjs from 'dayjs';
import { hashTagColumns } from './hashTag';
import { groupCol } from './defs/groupCol';
import { mercariCategoryColumns } from './mercariCategory';
import { ObjectId } from 'bson';
import { runTransaction } from '../util/runTransaction';
import { HashTagRowCell } from './HashTagRowCell';

export const mercariTaxonomy: Realm.ObjectSchema = {
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
}

export const h = createMRTColumnHelper<IMercariTaxonomy>();
export const helper = col(h);

export const mercariTaxonomyColumns: MRT_ColumnDef<IMercariTaxonomy>[] = [
    helper.pk(),
    helper.string('fullname', 'Full Name', undefined, { maxLength: 250, readonly: true }),
    helper.date('timestamp', 'Timestamp', (x?: Date) => x != null ? dayjs(x).format('YYYY-MM-DD') : '', { disableFuture: true }),
    helper.list('hashTags', 'Hash Tags', 'hashTag', HashTagRowCell, hashTagColumns, 'name', false),
    groupCol(h, 'Category', mercariCategoryColumns, 'category', 'bg-blue-700', 'text-white'),
    groupCol(h, 'SubCategory', mercariCategoryColumns, 'subCategory', 'bg-red-700', 'text-white'),
    groupCol(h, 'SubSubCategory', mercariCategoryColumns, 'subSubCategory', 'bg-orange-700', 'text-white')
]

export class MercariTaxonomy extends Realm.Object<IMercariTaxonomy> implements IMercariTaxonomy {
    _id: ObjectId;
    category?: IMercariCategory;
    subCategory?: IMercariCategory;
    subSubCategory?: IMercariCategory;
    hashTags: DBList<IHashTag>;
    fullname: string;
    timestamp?: Date | undefined;
    allHashTags: IHashTag[];

    static schema: Realm.ObjectSchema = mercariTaxonomy;

    static update(realm: Realm, item: IMercariTaxonomy): IMercariTaxonomy {
        const func = () => {
            const fullname = [item?.category?.name, item?.subCategory?.name, item?.subSubCategory?.name].filter(x => x != null).join('::');
            if (item.fullname !== fullname) {
                item.fullname = fullname;
            }
        }
        runTransaction(realm, func);
        return item;
    }
}
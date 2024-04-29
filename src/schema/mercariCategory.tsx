import Realm from 'realm';
import { schemaName } from '../util/schemaName';
import { $ } from './$';
import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IHashTag, IMercariCategory } from '../types';
import { col } from './defs/col';
import { runTransaction } from '../util/runTransaction';

export const mercariCategory: Realm.ObjectSchema = {
    name: schemaName($.mercariCategory()),
    embedded: true,
    properties: {
        name: $.string(),
        selector: $.string(),
        hashTags: $.hashTag.list
    }
};

const h = createMRTColumnHelper<IMercariCategory>();
const helper = col(h);

export const mercariCategoryColumns: MRT_ColumnDef<IMercariCategory>[] = [
    helper.string('name', 'Name', undefined, { maxLength: 150 }),
    helper.string('selector', 'Selector', undefined, { maxLength: 50 }),
    helper.listOfObject('hashTags', 'Hash Tags', 'hashTag', 'name'),
];

export class MercariCategory extends Realm.Object<IMercariCategory> implements IMercariCategory {
    name: string;
    selector: string;
    hashTags: DBList<IHashTag>;

    static schema = mercariCategory;
    static update(realm: Realm, item: IMercariCategory): IMercariCategory {
        const func = () => {
            if (item.selector.startsWith('#')) {
                return;
            }
            item.selector = ['#', item.selector].join('');
        }
        runTransaction(realm, func);
        return item;
    }
}
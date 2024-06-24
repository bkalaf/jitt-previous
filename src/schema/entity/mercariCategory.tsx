import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { IHashTag, IMercariCategory } from '../../types';
import { runTransaction } from '../../util/runTransaction';
import { EntityBase } from './EntityBase';

export class MercariCategory extends EntityBase<IMercariCategory> implements IMercariCategory {
    name: string;
    selector: string;
    hashTags: DBList<IHashTag>;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.mercariCategory()),
        embedded: true,
        properties: {
            name: $.string(),
            selector: $.string(),
            hashTags: $.hashTag.list
        }
    };
    static update(item: IMercariCategory): IMercariCategory {
        const func = () => {
            if (item.selector.startsWith('#')) {
                return;
            }
            item.selector = ['#', item.selector].join('');
        };
        runTransaction(MercariCategory.localRealm, func);
        return item;
    }
    static labelProperty = 'name';
    static init(): InitValue<IMercariCategory> {
        return {
            name: '', 
            selector: '#',
            hashTags: []
        }
    }
}

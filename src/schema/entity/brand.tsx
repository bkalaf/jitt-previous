import Realm, { BSON } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { IBrand, IHashTag, IMercariBrand } from '../../types';
import { distinctByOID } from '../../common/array/distinct';
import { EntityBase } from './EntityBase';
import { runTransaction } from '../../util/runTransaction';
import { getRange } from './getRange';
import { toCharCode } from '../../common/text/toCharCode';

export function fromCharCode(n: number) {
    return String.fromCharCode(n);
}
export function createFolderName(name: string) {
    const chars = [...getRange(toCharCode('a'), toCharCode('z')), ...getRange(toCharCode('A'), toCharCode('Z')), ...getRange(toCharCode('0'), toCharCode('9')), toCharCode('_'), toCharCode('-')];
    return name
        .split('')
        .filter((x) => chars.includes(toCharCode(x)))
        .join('')
        .toLowerCase();
}
export class Brand extends EntityBase<IBrand> implements IBrand {
    folder: string;
    _id: BSON.ObjectId;
    name: string;
    mercariBrand?: IMercariBrand | undefined;
    hashTags: DBList<IHashTag>;
    get allHashTags(): IHashTag[] {
        return distinctByOID<IHashTag>([...this.hashTags, ...(this.mercariBrand?.hashTags ?? [])]);
    }

    static schema: Realm.ObjectSchema = {
        name: schemaName($.brand()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            name: $.string(),
            mercariBrand: $.mercariBrand(),
            hashTags: $.hashTag.list,
            folder: $.string()
        }
    };
    static labelProperty = 'name' as keyof IBrand;
    static update(item: IBrand): IBrand {
        const func = () => {
            if (item.folder == null || item.folder === '') {
                item.folder = createFolderName(item.name);
            }
        };
        runTransaction(Brand.localRealm, func);
        return item;
    }
    static init(): InitValue<IBrand> {
        return {
            _id: new BSON.ObjectId(),
            name: '',
            hashTags: [],
            folder: ''
        };
    }
}

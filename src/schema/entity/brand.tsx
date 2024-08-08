import Realm, { BSON } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { IBrand, IHashTag, IMercariBrand } from '../../types';
import { distinctByOID } from '../../common/array/distinct';
import { EntityBase } from './EntityBase';
import { runTransaction } from '../../util/runTransaction';
import { checkFolderNameForInvalidCharacters } from '../../common/path/checkFolderNameForInvalidCharacters';
import { MRT_ColumnDef } from 'material-react-table';
import { brandColumns } from '../columns/brand';

export class Brand extends EntityBase<IBrand> implements IBrand {
    static columns: MRT_ColumnDef<IBrand>[] = brandColumns();
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
                item.folder = checkFolderNameForInvalidCharacters(item.name);
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

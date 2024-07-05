import Realm, { BSON } from 'realm';
import { EntityBase } from './EntityBase';
import { IAward, IBook, IContributor, Opt } from '../../types';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { BookGenres } from '../enums';
import { MRT_ColumnDef } from 'material-react-table';
import { bookColumns } from '../columns/bookColumns';

export class Book extends EntityBase<IBook> implements IBook {
    static columns: MRT_ColumnDef<IBook>[] = bookColumns();
    _id: BSON.ObjectId;
    title: string;
    subtitle: Opt<string>;
    copyright: Opt<string>;
    contributors: DBList<IContributor>;
    awards: DBList<IAward<'pulitzer' | 'hugo' | 'ny-times'>>;
    genre: Opt<BookGenres>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.book()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            title: $.string(),
            subtitle: $.string.opt,
            copyright: $.string.opt,
            contributors: $.contributor.list,
            awards: $.award.list,
            genre: $.string.opt
        }
    }
    static update(item: IBook) {
        return item;
    }
    static stringify = (value?: IBook, returnUndefined = false) => () => {
        return value == null ? returnUndefined ? true : '' : value.title;
    }
    static labelProperty = 'title';
    static init(): InitValue<IBook> {
        return {
            _id: new BSON.ObjectId(),
            title: '',
            contributors: [],
            awards: []
        }
    }
}
import Realm, { BSON } from 'realm';
import { EntityBase } from './EntityBase';
import { IAlbum, IAward, IContributor, ITrack } from '../../types';
import { MusicGenres } from '../enums';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { albumColumns } from '../columns/albumColumns';
import { MRT_ColumnDef } from 'material-react-table';

export class Album extends EntityBase<IAlbum> implements IAlbum {
    _id: BSON.ObjectId;
    title: string;
    subtitle: Opt<string>;
    copyright: Opt<string>;
    contributors: DBList<IContributor>;
    awards: DBList<IAward<'grammy'>>;
    tracks: DBDictionary<ITrack>;
    genre: Opt<MusicGenres>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.album()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            title: $.string(),
            subtitle: $.string.opt,
            copyright: $.string.opt,
            contributors: $.contributor.list,
            awards: $.award.list,
            tracks: $.track.dictionary,
            genre: $.string.opt
        }
    };
    static update(item: IAlbum): IAlbum {
        return item;
    }
    static stringify =
        (item?: IAlbum, returnUndefined = false) =>
        () =>
            item == null ?
                returnUndefined ? undefined
                :   ''
            :   item.title;
    static labelProperty = 'title';
    static init(): InitValue<IAlbum> {
        return {
            _id: new BSON.ObjectId(),
            title: '',
            awards: [],
            contributors: [],
            tracks: {}
        };
    }
    static columns = albumColumns() as MRT_ColumnDef<IAlbum>[];
}
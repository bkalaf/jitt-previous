import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../$';
import { IAward, IContributor, ITVSeries, ITVSeriesEpisode, Network } from '../../types';
import { schemaName } from '../../util/schemaName';
import { TVRatings, MovieGenres } from '../enums';
import { EntityBase } from './EntityBase';
import Realm, { BSON } from 'realm';
import { tvSeriesColumns } from '../columns/tvSeriesColumns';

export class TvSeries extends EntityBase<ITVSeries> implements ITVSeries {
    static columns: MRT_ColumnDef<ITVSeries>[] = tvSeriesColumns();
    _id: BSON.ObjectId;
    title: string;
    subtitle: Opt<string>;
    rating: Opt<TVRatings>;
    contributors: DBList<IContributor>;
    episodes: DBList<ITVSeriesEpisode>;
    network: Opt<Network>;
    awards: DBList<IAward<'emmy'>>;
    genre: Opt<MovieGenres>;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.tvSeries()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            title: $.string(),
            subtitle: $.string.opt,
            rating: $.string.opt,
            contributors: $.contributor.list,
            episodes: $.episode.list,
            network: $.string.opt,
            awards: $.award.list,
            genre: $.string.opt
        }
    }
    static labelProperty = 'title';
    static update(item: ITVSeries) {
        return item;
    }
    static init(): InitValue<ITVSeries> {
        return {
            _id: new BSON.ObjectId(),
            title: '',
            awards: [],
            contributors: [],
            episodes: []
        }
    }
}
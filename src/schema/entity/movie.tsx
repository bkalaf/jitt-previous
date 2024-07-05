import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../$';
import { IAward, IContributor, IMovie } from '../../types';
import { schemaName } from '../../util/schemaName';
import { movieColumns } from '../columns/movieColumns';
import { VideoRuntimeMeasure } from '../dimensions/VideoRuntime';
import { MovieRatings, MovieGenres } from '../enums';
import { EntityBase } from './EntityBase';
import Realm, { BSON } from 'realm';

export class Movie extends EntityBase<IMovie> implements IMovie {
    static columns: MRT_ColumnDef<IMovie>[] = movieColumns();
    _id: BSON.ObjectId;
    title: string;
    subtitle: Opt<string>;
    copyright: Opt<string>;
    runtime?: Opt<IMeasure<VideoRuntimeUnitsOfMeasure>>;
    contributors: DBList<IContributor>;
    rating: Opt<MovieRatings>;
    awards: DBList<IAward<'oscar'>>;
    genre: Opt<MovieGenres>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.movie()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            title: $.string(),
            subtitle: $.string.opt,
            copyright: $.string.opt,
            runtime: $.videoRuntimeMeasure(),
            contributors: $.contributor.list,
            rating: $.string.opt,
            awards: $.award.list,
            genre: $.string.opt
        }
    }
    static update(item: IMovie) {
        return item;
    }
    static labelProperty = 'title';
    static init(): InitValue<IMovie> {
        return {
            _id: new BSON.ObjectId(),
            title: '',
            contributors: [],
            awards: [],
            runtime: VideoRuntimeMeasure.init()
        }
    }

}
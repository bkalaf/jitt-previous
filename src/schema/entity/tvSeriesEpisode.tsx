import { ITVSeriesEpisode, Opt } from '../../types';
import Realm from 'realm';
import { EntityBase } from './EntityBase';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';

export class TvSeriesEpisode extends EntityBase<ITVSeriesEpisode> implements ITVSeriesEpisode {
    name: Opt<string>;
    season: Opt<number>;
    index: Opt<number>;
    id: Opt<string>;
    originalAirDate: Opt<Date>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.episode()),
        embedded: true,
        properties: {
            name: $.string.opt,
            season: $.int.opt,
            index: $.int.default(1),
            id: $.string.opt,
            originalAirDate: $.date.opt
        }
    }
    static update(item: ITVSeriesEpisode) {
        return item;
    }
    static labelProperty = 'name';
    static init(): InitValue<ITVSeriesEpisode> {
        return {}
    }
}
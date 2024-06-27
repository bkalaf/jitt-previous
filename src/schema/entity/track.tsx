import Realm from 'realm';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import { ITrack, Opt } from '../../types';
import { MusicDurationDimension } from '../dimensions/MusicDurationMeasure';

export class Track extends EntityBase<ITrack> implements ITrack {
    duration: Opt<MusicDurationDimension>;
    feat: DBList<string>;
    index: Opt<number>;
    name: Opt<string>;
    runtimeSecs: Opt<number>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.track()),
        embedded: true,
        properties: {
            feat: $.string.list,
            index: $.int(),
            name: $.string.opt,
            duration: $.musicDurationDimension()
        }
    };
    static update(item: ITrack): ITrack {
        return item;
    }
    static liComponent: ListItemCellComponent<ITrack> = (value?: ITrack) => () => (value == null ? '' : [value.index?.toFixed(0), value.name, value.feat ? `feat: ${value.feat.join(', ')}` : undefined].filter((x) => x != null).join('- '));

    static init(): InitValue<ITrack> {
        return {
            feat: []
        };
    }
}

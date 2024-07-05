import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IMediaVideosFilmDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';

export class MediaVideosFilmDetails extends EntityBase<IMediaVideosFilmDetails> implements IMediaVideosFilmDetails {
    static columns: MRT_ColumnDef<IProduct>[] = [];
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.mediaVideosFilm,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Videos Film';
    static type: DetailTypes = 'media/videos/film';
    static objectType = MediaVideosFilmDetails.schema.name;
}

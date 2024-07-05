import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IMediaVideosTvSeriesDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';

export class MediaVideosTvSeriesDetails extends EntityBase<IMediaVideosTvSeriesDetails> implements IMediaVideosTvSeriesDetails {
    static columns: MRT_ColumnDef<IProduct>[] = [];
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.mediaVideosTvSeries,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Media Videos Tv Series';
    static type: DetailTypes = 'media/videos/tv-series';
    static objectType = MediaVideosTvSeriesDetails.schema.name;
}

import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IMediaVideosDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { mediaVideosDetails } from '../details/mediaVideosDetails';

export class MediaVideosDetails extends EntityBase<IMediaVideosDetails> implements IMediaVideosDetails {
    static columns: MRT_ColumnDef<IProduct>[] = mediaVideosDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.mediaVideos,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Media Videos';
    static type: DetailTypes = 'media/videos';
    static objectType = MediaVideosDetails.schema.name;
}

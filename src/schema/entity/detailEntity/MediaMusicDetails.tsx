import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IMediaMusicDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { mediaMusicDetails } from '../details/mediaMusicDetails';

export class MediaMusicDetails extends EntityBase<IMediaMusicDetails> implements IMediaMusicDetails {
    static columns: MRT_ColumnDef<IProduct>[] = mediaMusicDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.mediaMusic,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Media Music';
    static type: DetailTypes = 'media/music';
    static objectType = MediaMusicDetails.schema.name;
}

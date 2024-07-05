import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IMediaVideoGamesDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { mediaVideoGameDetails } from '../details/mediaVideoGameDetails';

export class MediaVideoGamesDetails extends EntityBase<IMediaVideoGamesDetails> implements IMediaVideoGamesDetails {
    static columns: MRT_ColumnDef<IProduct>[] = mediaVideoGameDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.mediaVideoGames,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Media Video-Games';
    static type: DetailTypes = 'media/video-games';
    static objectType = MediaVideoGamesDetails.schema.name;
}

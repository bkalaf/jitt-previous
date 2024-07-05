import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IMediaDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { mediaDetails } from '../details/mediaDetails';

export class MediaDetails extends EntityBase<IMediaDetails> implements IMediaDetails {
    static columns: MRT_ColumnDef<IProduct>[] = mediaDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.media,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Media';
    static type: DetailTypes = 'media';
    static objectType = MediaDetails.schema.name;
}

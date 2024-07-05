import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IMediaBooksDetails, IProduct } from '../../../types';
import { EntityBase } from './../EntityBase';
import { mediaBooksDetails } from '../details/mediaBooksDetails';

export class MediaBooksDetails extends EntityBase<IMediaBooksDetails> implements IMediaBooksDetails {
    static columns: MRT_ColumnDef<IProduct>[] = mediaBooksDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.mediaBooks,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Media Books';
    static type: DetailTypes = 'media/books';
    static objectType = MediaBooksDetails.schema.name;
}

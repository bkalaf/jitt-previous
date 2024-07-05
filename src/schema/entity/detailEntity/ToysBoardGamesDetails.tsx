import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IProduct, IToysBoardGamesDetails } from '../../../types';
import { EntityBase } from './../EntityBase';
import { toysBoardGamesDetails } from '../details/toysBoardGamesDetails';

export class ToysBoardGamesDetails extends EntityBase<IToysBoardGamesDetails> implements IToysBoardGamesDetails {
    static columns: MRT_ColumnDef<IProduct>[] = toysBoardGamesDetails();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.toysBoardGames,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Toys Board-Games';
    static type: DetailTypes = 'toys/board-games';
    static objectType = ToysBoardGamesDetails.schema.name;
}

import Realm from 'realm';
import { IPiece, Opt } from '../../types';
import { ShapeTypes } from '../enums';
import { EntityBase } from './EntityBase';
export declare class Piece extends EntityBase<IPiece> implements IPiece {
    shape: Opt<ShapeTypes>;
    count: number;
    static schema: Realm.ObjectSchema;
    static liComponent: ListItemCellComponent<IPiece>;
    static update(item: IPiece): IPiece;
    static init(): InitValue<IPiece>;
}

import Realm from 'realm';
import { IPiece, Opt } from '../../types';
import { ShapeTypes } from '../enums';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { is } from '../../common/is';
import { EntityBase } from './EntityBase';

export class Piece extends EntityBase<IPiece> implements IPiece {
    shape: Opt<ShapeTypes>;
    count: number;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.piece()),
        embedded: true,
        properties: {
            shape: $.string.opt,
            count: $.int()
        }
    };

    static stringify = (value?: IPiece) => () => value == null ? undefined : [value.count.toFixed(0).concat('x'), value.shape].filter(is.not.nil).join(' ');
    static liComponent = Piece.stringify;
    static update(item: IPiece) {
        return item;
    }
    static init(): InitValue<IPiece> {
        return {
            count: 1
        };
    }
}

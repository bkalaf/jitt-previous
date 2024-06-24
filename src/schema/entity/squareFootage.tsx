import { $ } from '../$';
import { ISquareFootage, Opt } from '../../types';
import { schemaName } from '../../util/schemaName';
import Realm from 'realm';
import { EntityBase } from './EntityBase';

export class SquareFootage extends EntityBase<ISquareFootage> implements ISquareFootage {
    length: Opt<number>;
    width: Opt<number>;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.squareFootage()),
        embedded: true,
        properties: {
            length: $.double.opt,
            width: $.double.opt
        }
    };
    static init(): InitValue<ISquareFootage> {
        return {};
    }
    static update(item: ISquareFootage): ISquareFootage {
        return item;
    }
    static liComponent: ListItemCellComponent<ISquareFootage> = (value?: ISquareFootage) => () => (value == null ? '' : `${value.length}x${value.width}`);
}

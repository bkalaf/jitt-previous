import Realm from 'realm';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { IMinMax, Opt } from '../../types';
import { EntityBase } from './EntityBase';

export class MinMax extends EntityBase<IMinMax<number>> implements IMinMax<number> {
    min: Opt<number>;
    max: Opt<number>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.minMax()),
        embedded: true,
        properties: {
            min: $.int.opt,
            max: $.int.opt
        }
    };
    static update(item: IMinMax<number>) {
        return item;
    }
    static stringify = (value?: IMinMax<number>) => () => (value == null ? '' : [value.min, value.max].filter((x) => x != null).join(' to '));
    static liComponent = MinMax.stringify;
    static init(): InitValue<IMinMax<number>> {
        return {};
    }
}

import { $ } from '../$';
import { IHashTagUsage } from '../../types';
import { schemaName } from '../../util/schemaName';
import Realm from 'realm';
import { EntityBase } from './EntityBase';

export class HashTagUsage extends EntityBase<IHashTagUsage> {
    from: Date;
    count: number;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.hashTagUsage()),
        embedded: true,
        properties: {
            from: $.date(),
            count: $.int.default(0)
        }
    };
    static stringify = (item?: IHashTagUsage) => () => (item == null ? '' : `${item?.count.toFixed(0)}`);
    static liComponent: ListItemCellComponent<IHashTagUsage> = HashTagUsage.stringify;
    static update(item: IHashTagUsage): IHashTagUsage {
        return item;
    }
    static init(): InitValue<IHashTagUsage> {
        return {
            from: new Date(Date.now()),
            count: 0
        };
    }
}

import dayjs from 'dayjs';
import { $ } from '../$';
import { IBin, IScan } from '../../types';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import Realm, { } from 'realm';
import { scanColumns } from '../columns/scan';

export class Scan extends EntityBase<IScan> implements IScan {
    scanDate: Date;
    bin: Opt<IBin>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.scan()),
        embedded: true,
        properties: {
            scanDate: $.date(),
            bin: $.bin()
        }
    };
    static update(item: IScan): IScan {
        return item;
    }
    static init(): InitValue<IScan> {
        return {
            scanDate: new Date(Date.now())
        };
    }
    static stringify =
        (item?: IScan, returnUndef = false) =>
        () =>
            item == null ?
                returnUndef ? undefined
                :   ''
            :   [dayjs(item.scanDate).format('YYYY-MM-DD'), item.bin?.name].join(': ');
    static liComponent = (item?: IScan) => Scan.stringify(item, false);
    static columns = scanColumns();
}
import { $ } from '../$';
import { IScrapeKVP } from '../../types';
import { schemaName } from '../../util/schemaName';
import { scrapeKVPColumns } from '../columns/scrapeKVPColumns';
import { EntityBase } from './EntityBase';
import Realm from 'realm';

export class ScrapeKVP extends EntityBase<IScrapeKVP> implements IScrapeKVP {
    static columns = scrapeKVPColumns();
    key: Opt<string>;
    value: Opt<string>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.scrapeKVP()),
        embedded: true,
        properties: {
            key: $.string.opt,
            value: $.string.opt
        }
    }
    static update(item: IScrapeKVP): IScrapeKVP {
        return item;
    }
    static init(): InitValue<IScrapeKVP> {
        return {}
    }
    static stringify(item?: IScrapeKVP, returnUndef = false) {
        return () => item == null ? returnUndef ? undefined : '' : [item.key ?? 'n/a', item.value ?? 'n/a'].join(': ');
    }
    static liComponent = ScrapeKVP.stringify;
}
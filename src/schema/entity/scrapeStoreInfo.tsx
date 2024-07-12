import { $ } from '../$';
import { IScrapeStoreInfo } from '../../types';
import { schemaName } from '../../util/schemaName';
import { scrapeStoreInfoColumns } from '../columns/scrapeStoreInfoColumns';
import { EntityBase } from './EntityBase';
import Realm from 'realm';

export class ScrapeStoreInfo extends EntityBase<IScrapeStoreInfo> implements IScrapeStoreInfo {
    static columns = scrapeStoreInfoColumns()
    store: Opt<string>;
    description: Opt<string>;
    price: Opt<number>;
    lastUpdated: Opt<Date>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.scrapeStoreInfo()),
        embedded: true,
        properties: {
            store: $.string.opt,
            description: $.string.opt,
            price: $.float.opt,
            lastUpdated: $.date.opt
        }
    };
    static update(item: IScrapeStoreInfo): IScrapeStoreInfo {
        return item;
    }
    static init(): InitValue<IScrapeStoreInfo> {
        return {};
    }
    static stringify(item: IScrapeStoreInfo, retUndef = false) {
        return () =>
            item == null ?
                retUndef ? undefined
                :   ''
            :   item.description;
    }
    static liComponent = ScrapeStoreInfo.stringify;
    static ctor([stores, productInfo, price, lastUpdated]: [string, string, string, string]): IScrapeStoreInfo {
        try {
            const updatedOn = new Date(Date.parse(lastUpdated));
            return {
                description: productInfo,
                lastUpdated: updatedOn,
                store: stores,
                price: parseFloat(price.replaceAll('$', '').trim())
            };
        } catch (error) {
            // console.error(error);
            throw new Error(error);
        }
    }
}

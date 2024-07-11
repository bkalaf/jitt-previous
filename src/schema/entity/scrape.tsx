import { $ } from '../$';
import { IScrape, IScrapeKVP, IScrapeStoreInfo } from '../../types';
import { schemaName } from '../../util/schemaName';
import { scrapeColumns } from '../columns/scrapeColumns';
import { EntityBase } from './EntityBase';
import Realm from 'realm';

export class Scrape extends EntityBase<IScrape> implements IScrape {
    static columns = scrapeColumns();
    descriptions: DBList<string>;
    productInfos: DBList<IScrapeKVP>;
    barcodes: DBList<string>;
    storeInfos: DBList<IScrapeStoreInfo>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.scrape()),
        embedded: true,
        properties: {
            descriptions: $.string.list,
            productInfos: $.scrapeKVP.list,
            barcodes: $.string.list,
            storeInfos: $.scrapeStoreInfo.list
        }
    }
    static update(item: IScrape): IScrape {
        return item;
    }
    static init(): InitValue<IScrape> {
        return {
            descriptions: [],
            productInfos: [],
            barcodes: [],
            storeInfos: []
        }
    }
    static stringify(item?: IScrape, retUndef = false) {
        return () => item == null ? retUndef ? undefined : '' : item.descriptions.join(', ');
    }
    static liComponent = Scrape.stringify;
}
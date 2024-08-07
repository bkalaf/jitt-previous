import { $ } from '../$';
import { IApiResult } from '../../types';
import { schemaName } from '../../util/schemaName';
import { apiResultColumns } from '../columns/apiResult';
import { EntityBase } from './EntityBase';
import Realm, { BSON } from 'realm';

export class ApiResult extends EntityBase<IApiResult> implements IApiResult {
    request: Opt<string>;
    status: Opt<number>;
    get $source(): string {
        return new URL(this.request ?? '').hostname;
    }
    get $params(): Record<string, string | string[]> {
        return Object.fromEntries(new URL(this.request ?? '').searchParams.entries()) ?? {};
    }
    get $status(): Opt<number> {
        return 0;
    }
    attributes: DBDictionary<string>;
    _id: BSON.ObjectId;
    source: string;
    params: Opt<string>;
    timestamp: Opt<Date>;
    result: Opt<string>;
    obsolete: boolean;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.apiResult()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            source: $.string.default(''),
            params: $.string.opt,
            timestamp: $.date.opt,
            result: $.string.opt,
            obsolete: $.bool.default(false),
            attributes: $.string.dictionary,
            request: $.string.opt,
            status: $.int.opt
        }
    };
    static update(item: IApiResult): IApiResult {
        return item;
    }
    static labelProperty = 'result';
    static init(): InitValue<IApiResult> {
        return {
            _id: new BSON.ObjectId(),
            source: '',
            obsolete: false,
            timestamp: new Date(Date.now()),
            attributes: {}
        };
    }
    static stringify(item?: IApiResult, returnUndef = false) {
        return () =>
            item == null ?
                returnUndef ? undefined
                :   ''
            :   item.result;
    }
    static liComponent = (item?: IApiResult) => ApiResult.stringify(item, false);
    static columns = apiResultColumns();
}

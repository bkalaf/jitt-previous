import dayjs from 'dayjs';
import { $ } from '../$';
import { AdminTaskTypes, IAdminTask } from '../../types';
import { runTransaction } from '../../util/runTransaction';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import Realm, { BSON } from 'realm';
import { MRT_ColumnDef } from 'material-react-table';
import { adminTaskColumns } from '../columns/adminTask';

export class AdminTask extends EntityBase<IAdminTask> implements IAdminTask {
    _id: BSON.ObjectId;
    timestamp: Date;
    taskType: AdminTaskTypes;
    wasSuccess: boolean;
    result: DBDictionary<string>;
    static columns: MRT_ColumnDef<IAdminTask>[] = adminTaskColumns();
    static schema: Realm.ObjectSchema = {
        name: schemaName($.adminTask()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            timestamp: $.date(),
            taskType: $.string(),
            wasSuccess: $.bool.default(false),
            result: $.string.dictionary
        }
    }
    static init(): InitValue<IAdminTask> {
        return {
            _id: new BSON.ObjectId(),
            timestamp: new Date(Date.now()),
            taskType: 'unknown',
            wasSuccess: false,
            result: {}
        }
    }
    static update(item: IAdminTask): IAdminTask {
        const func = () => {
            if (Array.from(item?.result.keys() ?? []).includes('error')) {
                item.wasSuccess = false;
            }
        }
        runTransaction(AdminTask.localRealm, func);
        return item;
    }
    static labelProperty = 'taskType';
    static stringify = (item?: IAdminTask, returnUndef = false) => item == null ? returnUndef ? undefined : '' : [item.taskType, dayjs(item.timestamp).format('YYYY-MM-DD'), item.wasSuccess ? 'success' : 'failure'].join(' - ');
    static liComponent = (item?: IAdminTask) => () => AdminTask.stringify(item);
}
import { BSON } from 'realm';
import { $ } from './$';
import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/pro-solid-svg-icons';
import { IconButton, Tooltip } from '@mui/material';
import { schemaName } from '../util/schemaName';
import { createStringControl } from '../components/controls/createStringControl';
import { ISelfStorage } from '../types';

export const selfStorage: Realm.ObjectSchema = {
    name: schemaName($.selfStorage()),
    primaryKey: '_id',
    properties: {
        _id: $.objectId(),
        name: $.string(),
        website: $.string.opt
    }
};

const helper = createMRTColumnHelper<ISelfStorage>();

export const selfStorageColumns = [
    helper.accessor('_id', {
        header: 'ID',
        Cell: function ({ cell }: Parameters<Exclude<MRT_ColumnDef<ISelfStorage, any>['Cell'], undefined>>[0]) {
            const value = cell.getValue<BSON.ObjectId>().toHexString();
            return (
                <Tooltip title={value}>
                    <IconButton className='p-0 m-0 text-yellow-500 bg-blue-700'>
                        <FontAwesomeIcon className='m-0.5 ' icon={faKey} size='sm'></FontAwesomeIcon>
                    </IconButton>
                </Tooltip>
            );
        },
        enableEditing: false
    }),
    helper.accessor('name', { header: 'Name', Edit: createStringControl({ maxLength: 100, required: true }) }),
    helper.accessor('website', { header: 'URL', Edit: createStringControl({ maxLength: 225, type: 'url' }) })
] as MRT_ColumnDef<ISelfStorage>[]

import { MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { BoolTableCell } from '../../components/table/cells/BoolTableCell';
import { BoolControl } from '../../components/table/controls/BoolControl';
import { process } from '@electron/remote';

export function boolColumnDefinition<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, $header?: string) {
            return baseCol<T, boolean | undefined>(
                helper,
                name,
                BoolTableCell,
                BoolControl,
                $header,
                false,
                false,
                {
                    filterSelectOptions: [
                        { label: 'On', value: 'true' },
                        { label: 'Off', value: 'false' }
                    ],
                    filterVariant: 'checkbox',
                    filterFn: function isTrue(row, id, filterValue) {
                        // console.info('filterFn', row.getValue(id), filterValue);
                        process.stdout.write(`getValue: ${row.getValue(id)} filterValue: ${filterValue}\n`);
                        return (row.getValue<boolean>(id)?.toString() ?? 'false') === filterValue;
                    }
                },
                undefined,
                ...dependencies
            );
        };
    };
}

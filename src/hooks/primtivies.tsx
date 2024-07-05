import { MRT_ColumnDef } from 'material-react-table';
import { StringTableCell } from '../components/table/cells/StringTableCell';
import { StringControl } from '../components/table/controls/StringControl';
import { DateControl } from '../components/table/controls/DateControl';
import { BoolTableCell } from '../components/table/cells/BoolTableCell';
import { BoolControl } from '../components/table/controls/BoolControl';

export const primitives = {
    string: [
        {
            header: 'Value',
            accessorKey: 'value',
            Cell: StringTableCell,
            Edit: StringControl
        } as MRT_ColumnDef<{ value: any }>
    ],
    int: [
        {
            header: 'Value',
            accessorKey: 'value',
            Cell: StringTableCell,
            Edit: StringControl,
            meta: {
                type: 'number'
            }
        } as MRT_ColumnDef<{ value: any }>
    ],
    double: [
        {
            header: 'Value',
            accessorKey: 'value',
            Cell: StringTableCell,
            Edit: StringControl,
            meta: {
                type: 'number'
            }
        } as MRT_ColumnDef<{ value: any }>
    ],
    date: [
        {
            header: 'Value',
            accessorKey: 'value',
            Cell: StringTableCell,
            Edit: DateControl
        } as MRT_ColumnDef<{ value: any }>
    ],
    bool: [
        {
            header: 'Value',
            accessorKey: 'value',
            Cell: BoolTableCell,
            Edit: BoolControl
        } as MRT_ColumnDef<{ value: any }>
    ]
};


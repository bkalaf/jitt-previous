import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { col } from '../defs/col';
import { IAttribute } from '../../types';
import { useFormContext } from 'react-hook-form-mui';
import { attributePaths } from '../enums';

export const h = createMRTColumnHelper<IAttribute>();
export const helper = col(h);

function AnyCell<T extends MRT_RowData>(props: CellFunctionParams<T, any>) {
    const { cell } = props;
    const value = cell.getValue()?.toString() ?? '';
    return value;
}

export const attributeColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        // helper.freeSolo('path', 'Path', (x?: string, y?: string) => (x != null && y != null) ? x.localeCompare(y) as Compared : 0, { required: true }),
        // helper.bool('unset', 'Unset'),
        // helper.string('value', 'Value', undefined, { maxLength: 150 })
        helper.enum(...dependencies)('path', 'Path', { enumKey: 'attributePaths' }),
        helper.bool(...dependencies)('unset', 'Unset'),
        h.accessor('value', {
            Cell: AnyCell,
            header: 'Value',
            meta: {
                columnName: 'value',
                dependencies: dependencies
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            Edit: function AnyValueEdit(props: EditFunctionParams<IAttribute>) {
                const formContext = useFormContext();
                const pathValue = formContext.watch('path');
                const attribute = attributePaths.find((x) => x.key === pathValue);
                // console.info(`pathValue`, pathValue, 'attribute', attribute);
                if (attribute == null) return null;
                const { Component } = attribute;
                return <Component />;
            }
        })
    ] as MRT_ColumnDef<T>[];

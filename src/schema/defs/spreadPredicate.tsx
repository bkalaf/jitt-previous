import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useCheckPredicate } from '../../hooks/useHasDetailType';


export function spreadPredicate<T extends MRT_RowData, U>(name: string, predicate: (x?: any) => boolean, isNegative = false, ...cols: MRT_ColumnDef<T, U>[]): MRT_ColumnDef<T, U>[] {
    return cols.map((col) => {
        console.log(col.columnDefType);
        return (
            col.columnDefType === 'data' ?
                {
                    ...col,
                    Edit: function (props: EditFunctionParams<T>) {
                        const { Edit } = col;
                        const value = useCheckPredicate(name, predicate);
                        const isDisabled = isNegative ? !value : value;
                        if (Edit == null) throw new Error('No Edit Cell');
                        const EditComponent = Edit as React.FunctionComponent<EditFunctionParams<T>>;
                        return isDisabled ? <EditComponent {...props} /> : null;
                    } as MRT_ColumnDef<T, U>['Edit']
                }
                : col.columnDefType === 'group' ?
                    {
                        ...col,
                        columns: spreadPredicate(name, predicate, isNegative, ...(col.columns ?? []))
                    }
                    : col
        );
    });
}

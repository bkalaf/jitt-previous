import { DetailTypes } from '../../types';
import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useCheckProperty, useHasDetailType } from './useHasDetailType';

export function whenType<T extends MRT_RowData>(item: DetailTypes | DetailTypes[], col: MRT_ColumnDef<T>): MRT_ColumnDef<T> {
    return {
        ...col,
        Edit: function(props: EditFunctionParams<T>) {
            const { Edit } = col;
            const isDisabled = useHasDetailType('detailTypes', item);
            if (Edit == null) throw new Error('No Edit Cell');
            const EditComponent = Edit as React.FunctionComponent<EditFunctionParams<T>>;
            return isDisabled ? null : <EditComponent {...props} />
        } as MRT_ColumnDef<T>['Edit']
    }
}

export function whenProperty<T extends MRT_RowData>(propname: string, item: any, col: MRT_ColumnDef<T>) {
    return {
        ...col,
        Edit: function(props: EditFunctionParams<T>) {
            const { Edit } = col;
            const isDisabled = useCheckProperty(propname, item);
            if (Edit == null) throw new Error('No Edit Cell');
            const EditComponent = Edit as React.FunctionComponent<EditFunctionParams<T>>;
            return isDisabled ? null : <EditComponent {...props} />
        } as MRT_ColumnDef<T>['Edit']
    }
}
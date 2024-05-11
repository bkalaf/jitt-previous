import { DetailTypes } from '../../types';
import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useHasDetailType } from './useHasDetailType';

export function whenType<T extends MRT_RowData>(item: DetailTypes, col: MRT_ColumnDef<T>): MRT_ColumnDef<T> {
    return {
        ...col,
        Edit: function(props: EditFunctionParams<any, any>) {
            const { Edit } = col;
            const isDisabled = useHasDetailType('detailTypes', item);
            if (Edit == null) throw new Error('No Edit Cell');
            return isDisabled ? null : <Edit {...props} />
        } as MRT_ColumnDef<T>['Edit']
    }
}
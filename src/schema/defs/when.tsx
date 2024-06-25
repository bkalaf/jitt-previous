import { DetailTypes } from '../../types';
import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useCheckPredicate, useCheckProperty, useHasDetailType } from '../../hooks/useHasDetailType';
import { spreadPredicate } from './spreadPredicate';

export function addID<T extends MRT_RowData, U>(id: string, col: MRT_ColumnDef<T, U>): MRT_ColumnDef<T, U> {
    return {
        ...col,
        id
    };
}

export function whenType<T extends MRT_RowData, U>(item: DetailTypes | DetailTypes[], col: MRT_ColumnDef<T, U>): MRT_ColumnDef<T, U> {
    return {
        ...col,
        Edit: function (props: EditFunctionParams<T>) {
            const { Edit } = col;
            const isDisabled = useHasDetailType('detailTypes', item);
            if (Edit == null) throw new Error('No Edit Cell');
            const EditComponent = Edit as React.FunctionComponent<EditFunctionParams<T>>;
            return isDisabled ? null : <EditComponent {...props} />;
        } as MRT_ColumnDef<T, U>['Edit']
    };
}

export function whenProperty<T extends MRT_RowData, U>(propname: string, item: any, col: MRT_ColumnDef<T, U>): MRT_ColumnDef<T, U> {
    return {
        ...col,
        Edit: function (props: EditFunctionParams<T>) {
            const { Edit } = col;
            const isDisabled = useCheckProperty(propname, item);
            if (Edit == null) throw new Error('No Edit Cell');
            const EditComponent = Edit as React.FunctionComponent<EditFunctionParams<T>>;
            return isDisabled ? <EditComponent {...props} /> : null;
        } as MRT_ColumnDef<T, U>['Edit']
    };
}

export function whenPropertyNotZero<T extends MRT_RowData, U>(propname: string, col: MRT_ColumnDef<T, U>): MRT_ColumnDef<T, U> {
    return {
        ...col,
        Edit: function (props: EditFunctionParams<T>) {
            const { Edit } = col;
            const isDisabled = useCheckPredicate(propname, (x?: any) => x == null && x === 0);
            if (Edit == null) throw new Error('No Edit Cell');
            const EditComponent = Edit as React.FunctionComponent<EditFunctionParams<T>>;
            return isDisabled ? <EditComponent {...props} /> : null;
        } as MRT_ColumnDef<T, U>['Edit']
    };
}

export const $enableWhen = {
    oldProperty:
        (name: string, item: any) =>
        <T extends MRT_RowData, U>(col: MRT_ColumnDef<T, U>): MRT_ColumnDef<T, U> =>
            whenProperty(name, item, col),
    property:
        (name: string, item: any, isNull = false) =>
        <T extends MRT_RowData, U>(col: MRT_ColumnDef<T, U> | MRT_ColumnDef<T, U>[]): MRT_ColumnDef<T, U>[] => {
            const predicate = (value?: any) =>
                value == null ? isNull
                : Array.isArray(item) ? item.includes(value)
                : item === value;
            return spreadPredicate(name, predicate, true, ...(Array.isArray(col) ? col : [col]));
        }
};
export const $disableWhen = {
    property:
        (name: string, item: any, isNull = false) =>
        <T extends MRT_RowData, U>(col: MRT_ColumnDef<T, U> | MRT_ColumnDef<T, U>[]): MRT_ColumnDef<T, U>[] => {
            const predicate = (value?: any) =>
                value == null ? isNull
                : Array.isArray(item) ? item.includes(value)
                : item === value;
            return spreadPredicate(name, predicate, false, ...(Array.isArray(col) ? col : [col]));
        }
};

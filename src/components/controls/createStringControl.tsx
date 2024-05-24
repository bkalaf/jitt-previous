import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { TextFieldElement } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useControl } from './useControl';

export function createStringControl<T extends MRT_RowData, U>(): Exclude<MRT_ColumnDef<T, any>['Edit'], undefined> {
    return function StringControl(props: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Edit'], undefined>>[0]) {
        useWhyDidIUpdate('StringControl', props);
        // const { accessorKey, id, header } = props.column.columnDef;
        // const name = accessorKey ?? id;
        // const type = opts.type ?? 'text';
        // const { control } = useFormContext();
        // const rules = useMemo(() => createRules(opts), []);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { required, readonly, invalid, onChange: _, ...rest } = useControl<T, U | undefined, HTMLInputElement | HTMLTextAreaElement>(props.column);

        return <TextFieldElement required={required} aria-readonly={readonly} aria-invalid={invalid} {...rest} />;
    };
}



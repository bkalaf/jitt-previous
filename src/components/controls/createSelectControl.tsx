import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { SelectElement } from 'react-hook-form-mui';
import { useControl } from './useControl';

export function createSelectControl<T extends MRT_RowData>(opts: { options: { key: string; text: string }[] }): Exclude<MRT_ColumnDef<T, any>['Edit'], undefined> {
    return function SelectControl(props: Parameters<Exclude<MRT_ColumnDef<T, string | undefined>['Edit'], undefined>>[0]) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { onChange: _, readonly, required, invalid, type, inputProps, ...rest } = useControl(props.column);

        return <SelectElement valueKey='key' labelKey='text' options={opts.options} required={required} aria-invalid={invalid} aria-readonly={readonly} aria-required={required} {...rest} />;
    };
}

import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import React from 'react';

export function createEditComponent(Wrapper?: React.FunctionComponent<{ children: Children }>) {
    return function <T extends MRT_RowData>(def: MRT_ColumnDef<T>): React.ReactNode[] {
        if (def.columns) {
            return def.columns.map(createEditComponent(Wrapper)).reduce((pv, cv) => [...pv, ...cv], []);
        }
        if (def.Edit == null) {
            return [];
        }
        const Wrap =
            Wrapper ??
            function InterntalWrapper({ children }: { children: Children }) {
                return <>{children}</>;
            };
        const EditCntrl = def.Edit;
        return [
            <Wrap key={def.id ?? def.accessorKey ?? 'n/a'}>
                <EditCntrl cell={undefined as any} row={undefined as any} table={undefined as any} column={{ columnDef: def as any } as any} />
            </Wrap>
        ];
    };
}

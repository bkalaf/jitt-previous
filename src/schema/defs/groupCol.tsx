import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { groupProps } from '../groupProps';
import { toID } from '../../util/toID';
import { ColumnMeta } from '@tanstack/react-table';
import { is } from '../../common/is';

export function groupCol<T extends MRT_RowData>(
    helper: MRT_ColumnHelper<T>,
    header: string,
    columns: (...dependencies: IDependency<any, any>[]) => MRT_ColumnDef<any>[],
    propertyName: string,
    bgColor: string,
    textColor: string
): <V extends MRT_RowData, VKey extends keyof V>(...dependencies: IDependency<any, VKey>[]) => MRT_ColumnDef<V> {
    return function <V extends MRT_RowData, VKey extends keyof V>(...dependencies: IDependency<any, VKey>[]) {
        return helper.group({
            header,
            id: toID(header),
            columns: spreadEmbed(columns, propertyName, header)(...dependencies),
            ...groupProps(bgColor, textColor)
        });
    } as any;
}

export function addPre(pre?: string, baseName?: string) {
    return [pre, baseName].filter(is.not.nil).join('.');
}

export function addParentObject(accessor: string, header: string, def: MRT_ColumnDef<any>, ...dependencies: IDependency<any, any>[]): MRT_ColumnDef<any> {
    const meta = def.meta as ColumnMeta<any, any>;
    return {
        ...def,
        header: [header, def.header].join(' '),
        accessorKey: addPre(accessor, def.accessorKey),
        id: [accessor, def.id ?? def.accessorKey].join('-'),
        meta: meta ? {
            ...meta,
            dependencies: [...(meta?.dependencies ?? []).map((d) => (d.isLocal ? { ...d, property: addPre(accessor, d.property) } : d)), ...dependencies],
            columnName: addPre(accessor, meta?.columnName)
        } : undefined,
        columns: def.columns ? def.columns.map((x) => addParentObject(accessor, header, x, ...dependencies)) : undefined
    };
}
export function spreadEmbed(columns: (...dependencies: IDependency<any, any>[]) => MRT_ColumnDef<any>[], accessor: string, header: string) {
    return (...dependencies: IDependency<any, any>[]) => {
        return columns().map((x) => addParentObject(accessor, header, x, ...dependencies));
    };
}

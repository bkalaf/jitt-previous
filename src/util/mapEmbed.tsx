import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { is } from '../common/is';
import { ColumnMeta } from '@tanstack/react-table';
import { camelToProper } from '../common/text/camelToProper';

export function mapEmbed<T extends MRT_RowData, TKey extends keyof T>(columns: (...dependencies: IDependency<any, any>[]) => MRT_ColumnDef<any>[], accessorKey: string, ...dependencies: IDependency<T, TKey>[]): MRT_ColumnDef<any>[] {
    const interim = columns(...dependencies);
    console.info(`mapEmbed, interim`, interim);
    return interim
        .map((def) =>
            def.columnDefType === 'data' ?
                [
                    {
                        ...def,
                        header: [camelToProper(accessorKey), def.header].join(' '),
                        id: def.id ? [accessorKey, def.id].join('.') : [accessorKey, def.accessorKey].join('.'),
                        accessorKey: [accessorKey, def.accessorKey].join('.'),
                        meta: {
                            ...(def.meta ?? {}),
                            dependencies: dependencies.map((d) => ({ ...d, property: d.isLocal ?? false ? [accessorKey, d.property].join('.') : d.property })),
                            columnName: [accessorKey, (def.meta as ColumnMeta<any, any>)?.columnName].filter(is.not.nil).join('.')
                        }
                    } as MRT_ColumnDef<any>
                ]
            : def.columnDefType === 'group' ? mapEmbed(() => def.columns ?? [], accessorKey, ...dependencies)
            : [def]
        )
        .reduce((pv, cv) => [...pv, ...cv], []) as any;
}

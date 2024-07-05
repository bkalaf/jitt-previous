import { MRT_ColumnHelper, MRT_RowData, MRT_ColumnDef } from 'material-react-table';
import { col } from '../../defs/col';
import $me from '../../enums';
import { $depend } from '../../columns/$depend';

export const intMeasureColumns: <T extends MRT_RowData>(h: MRT_ColumnHelper<T>, enumKey: keyof typeof $me, idPrefix?: string) => (...dependencies: IDependency<any, any>[]) => MRT_ColumnDef<any>[] =
    <T extends MRT_RowData>(h: MRT_ColumnHelper<T>, enumKey: keyof typeof $me, idPrefix?: string) =>
    (...dependencies: IDependency<any, any>[]) => {
        const helper = col(h);
        return [
            helper.int(...dependencies)('value', 'Value', { min: 0, id: idPrefix ? [idPrefix, 'value'].join('-') : undefined }),
            helper.enum($depend.notZeroOrNull('value', true), ...dependencies)('uom', 'UOM', { enumKey: enumKey, id: idPrefix ? [idPrefix, 'uom'].join('-') : undefined })
        ] as MRT_ColumnDef<any>[];
    };

export const doubleMeasureColumns: <T extends MRT_RowData>(h: MRT_ColumnHelper<T>, enumKey: keyof typeof $me, idPrefix?: string) => (...dependencies: IDependency<any, any>[]) => MRT_ColumnDef<any>[] =
    <T extends MRT_RowData>(h: MRT_ColumnHelper<T>, enumKey: keyof typeof $me, idPrefix?: string) =>
    (...dependencies: IDependency<any, any>[]) => {
        const helper = col(h);
        return [
            helper.double(...dependencies)('value', 'Value', { min: 0, id: idPrefix ? [idPrefix, 'value'].join('-') : undefined }),
            helper.enum($depend.notZeroOrNull('value', true), ...dependencies)('uom', 'UOM', { enumKey: enumKey, id: idPrefix ? [idPrefix, 'uom'].join('-') : undefined })
        ] as MRT_ColumnDef<any>[];
    };

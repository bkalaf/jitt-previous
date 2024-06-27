// import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
// import { col } from '../defs/col';
// const h = createMRTColumnHelper<OBSOLETE_IDimension<['sec'], '', 0.01666667, ['min']>>();
// const helper = col(h);
// // export const dimension: <T extends(uom: keyof typeof $me, ...dependencies: IDependency<IProduct, any>[]) => MRT_ColumnDef<SingleDimension<T, TConvert, U>[] = (uom: keyof typeof $me, ...dependencies: IDependency<IOldDimension<string>, any>[]) =>
// //     [helper.double(...dependencies)('value', 'Value', { min: 0 }), helper.enum($depend.notZeroOrNull('value', true), ...dependencies)('uom', 'UOM', { enumKey: uom })] as MRT_ColumnDef<IOldDimension<string>>[];
// export const durationDimension: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<OBSOLETE_IDimension<['sec'], '', 0.01666667, ['min']>>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
//     helper.int(...dependencies)('value', 'Value', { min: 0 }),
//     helper.listOfEnum(...dependencies)('uoms', 'UOMs', { enumKey: 'durationUOM' })
// ];
//# sourceMappingURL=_dimension.js.map
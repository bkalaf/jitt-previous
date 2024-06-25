// import { MaterialReactTable, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
// import { useCallback } from 'react';
// import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
// import { IconBtn } from '../IconBtn';
// import { faPlusSquare } from '@fortawesome/pro-solid-svg-icons';
// import { List } from '@mui/material';
// import { useNestedTable } from '../../hooks/useNestedTable';

// export function createDataStructureControl<T extends MRT_RowData, TValue>(
//     type: string,
//     objectType: string,
//     columns: MRT_ColumnDef<any> | MRT_ColumnDef<any>[],
//     RowComponent: IRowCell<TValue>,
//     labelProperty?: string
//     // readonly = false
// ) {
//     return function DataStructureControl(props: EditFunctionParams<T, StandardDictionary<T>>) {
//         useWhyDidIUpdate('DataStructureControl', props);
//         const { cell, column } = props;
//         const { header } = column.columnDef;
//         const { table, data, LiComponent } = useNestedTable(cell as any, type as any, objectType, columns as any, RowComponent, labelProperty);

//         const onInsertClick = useCallback(() => {
//             table.setCreatingRow(true);
//         }, [table]);

//         return (
//             <div className='relative w-auto h-auto'>
//                 <IconBtn icon={faPlusSquare} tooltip='Insert a new list item.' onClick={onInsertClick} className='absolute top-0 left-0' />
//                 <fieldset className='border border-black shadow-inner shadow-black'>
//                     <legend>{header}</legend>
//                     <MaterialReactTable table={table} />
//                     <List>
//                         {data.map((item, ix) => (
//                             <LiComponent data={item} key={ix} index={ix} labelProperty={labelProperty} />
//                             // <ListItem key={ix} secondaryAction={<IconBtn icon={faTrash} tooltip='Delete Row' onClick={deleteFunction(key)} />}>
//                             //     <ListItemText primary={key} secondary={''} />
//                             // </ListItem>
//                         ))}
//                     </List>
//                 </fieldset>
//             </div>
//         );
//     };
// }

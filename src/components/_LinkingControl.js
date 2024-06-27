// import { MRT_Cell, MRT_RowData } from 'material-react-table';
// import { AutocompleteElement, useFormContext } from 'react-hook-form-mui';
// import { camelToProper } from 'src/common/text/camelToProper';
// import { useQuery } from '@tanstack/react-query';
// import { getProperty } from 'src/common/object/getProperty';
// import { BSON } from 'realm';
// import { createFilterOptions } from '@mui/material';
// import { useMemo } from 'react';
// import { useWhyDidIUpdate } from '../hooks/useWhyDidIUpdate';
// import { useLocalRealm } from '../hooks/useLocalRealm';
// export function LinkingControl<T extends MRT_RowData & { _id: BSON.ObjectId }, U extends MRT_RowData & { _id: BSON.ObjectId }>(props: { objectType: string; labelProperty: string; cell: MRT_Cell<T, DBList<U> | U[] | undefined> }) {
//     useWhyDidIUpdate('LinkingControl', props);
//     const name = props.cell.column.columnDef.accessorKey ?? props.cell.column.columnDef.id ?? 'n\\a';
//     const label = props.cell.column.columnDef.header ?? camelToProper(name);
//     const { control } = useFormContext();
//     const db = useLocalRealm();
//     const { data, isLoading } = useQuery({
//         queryKey: [props.objectType, props.labelProperty],
//         queryFn: () => {
//             if (db == null) throw new Error('no db');
//             return Promise.resolve([...db.objects<U>(props.objectType).sorted(props.labelProperty)]);
//         }
//     });
//     const filter = useMemo(
//         () =>
//             createFilterOptions<U>({
//                 ignoreAccents: true,
//                 ignoreCase: true,
//                 limit: 400,
//                 trim: true,
//                 matchFrom: 'start'
//             }),
//         []
//     );
//     return (
//         <AutocompleteElement
//             name='value'
//             label={label}
//             showCheckbox
//             control={control}
//             options={data ?? []}
//             multiple
//             loading={isLoading}
//             autocompleteProps={{
//                 getOptionLabel: (option: U) => getProperty(props.labelProperty as any, option) ?? '',
//                 isOptionEqualToValue: (option: U, value: U) => option._id.toHexString().localeCompare(value._id.toHexString()) === 0,
//                 filterOptions: filter
//             }}
//         />
//     );
// }
//# sourceMappingURL=_LinkingControl.js.map
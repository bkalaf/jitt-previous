
// export function createFreeSoloControl<T extends MRT_RowData, U extends string>(comparator: (x: U, y: U) => Compared, required = false, readonly = false, multiple = false) {
//     return function FreeSoloControl(props: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Edit'], undefined>>[0]) {
//         useWhyDidIUpdate('FreeSoloControl', props);
//         const { column } = props;
//         const { accessorKey, id, header } = column.columnDef;
//         const name = accessorKey ?? id ?? 'n/a';
//         const { control, setValue } = useFormContext();
//         const options = useMemo(() => {
//             console.log(`column.getFacetedUniqueValues`, column.getFacetedUniqueValues());
//             const keys = Array.from((column.getFacetedUniqueValues() as Map<U, number>).keys());
//             const reduced = multiple
//                 ? distinctBy(
//                       (x, y) => x.localeCompare(y) === 0,
//                       ((keys as any) as string[][]).reduce((pv, cv) => [...pv, ...cv], [])
//                   )
//                 : keys;
//             return reduced.map((x) => ({ key: x, text: x })).sort((x, y) => x.text.localeCompare(y.text));
//         }, [column]);
//         const isOptionEqualToValue = useCallback((option: AutoOption, value: string) => {
//             console.log(`isOptionEqual`, option, value);
//             return comparator(option.key as U, value as U) === 0;
//         }, []);
//         const filterOpts = useMemo(
//             () =>
//                 createFilterOptions<AutoOption>({
//                     ignoreAccents: true,
//                     ignoreCase: true,
//                     limit: 400,
//                     trim: true,
//                     matchFrom: 'start'
//                 }),
//             []
//         );
//         const filter = useCallback(
//             (options: AutoOption[], params: FilterOptionsState<AutoOption>) => {
//                 const filtered = filterOpts(options, params);

//                 if (params.inputValue !== '') {
//                     filtered.push({
//                         key: params.inputValue,
//                         text: `ADD: ${params.inputValue}`
//                     });
//                 }
//                 return filtered;
//             },
//             [filterOpts]
//         );
//         const onChange = useCallback(
//             (event: React.SyntheticEvent, value: AutoOption) => {
//                 console.log(`onchange`, name, value, event);
//                 setValue(name, Array.isArray(value) ? value.map((x) => x.key) : value.key);
//             },
//             [name, setValue]
//         );
//         const getOptionLabel = useCallback((x: AutoOption | { inputValue: string } | string) => (typeof x === 'string' ? x : 'inputValue' in x ? x.inputValue : x.text), []);
//         return (
//             <AutocompleteElement
//                 name={name}
//                 control={control}
//                 label={header}
//                 options={options}
//                 multiple={multiple}
//                 showCheckbox={multiple}
//                 autocompleteProps={{
//                     onChange: onChange,
//                     freeSolo: true,
//                     getOptionLabel: getOptionLabel,
//                     isOptionEqualToValue: isOptionEqualToValue,
//                     filterOptions: filter,
//                     selectOnFocus: true,
//                     clearOnBlur: true,
//                     handleHomeEndKeys: true,
//                     readOnly: readonly
//                 }}
//                 required={required}
//             />
//         );
//     };
// }


// export function createLookupCell<T extends MRT_RowData, U extends MRT_RowData>(objectType: string, labelProperty: Path<U>) {
//     return function LookupCell({ cell }: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Cell'], undefined>>[0]) {
//         const value = cell.getValue<U | undefined>();
//         console.info(cell.column.columnDef.accessorKey, `value`, value);
//         const navigate = useNavigate();
//         const [searchParams] = useSearchParams({ _id: value != null ? (value as { _id: BSON.ObjectId })._id.toHexString() : '' });
//         const onClick = useCallback(() => navigate(`/data/v1/${objectType}?${searchParams.toString()}`), [navigate, searchParams]);

//         return (
//             // <span className='w-full cursor-alias'
//             <Link
//                 className='w-full cursor-pointer text-left indent-1 font-extrabold underline text-pink-500 decoration-pink-500 group-data-[row-depth="4"]:text-pink-500 group-data-[row-depth="5"]:text-pink-700 group-data-[row-depth="6"]:text-pink-700 group-data-[row-depth="4"]:decoration-pink-500 group-data-[row-depth="5"]:decoration-pink-700 group-data-[row-depth="6"]:decoration-pink-700'
//                 underline='always'
//                 variant='button'
//                 component='button'
//                 onClick={onClick}
//             >
//                 {value == null ? '' : (getProperty(labelProperty, value) as string)}
//             </Link>
//             // <span className='w-full cursor-link-select' onClick={onClick}>
//             //     {value == null ? '' : (getProperty(labelProperty, value) as string)}
//             // </span>
//         );
//     };
// }

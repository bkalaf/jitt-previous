import { MRT_SortingState } from 'material-react-table';


export function toSorted(queryParams: URLSearchParams, sorting?: MRT_SortingState): [URLSearchParams, [string, boolean][]] {
    if (sorting == null || sorting.length === 0) return [queryParams, []];
    const searchParams = new URLSearchParams();
    const result = sorting.map(({ id, desc }) => [id, desc] as [string, boolean]);
    for (const { id, desc } of sorting) {
        searchParams.set(id, desc ? 'desc' : 'asc');
    }
    queryParams.set('sort', searchParams.toString());
    return [queryParams, result];
}

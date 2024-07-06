import { matchSorter } from 'match-sorter';
import { asString } from './asString';


export function toGlobalFilter<T>(queryParams: URLSearchParams, globalFilter?: unknown): [URLSearchParams, (data: T[]) => T[]] {
    if (globalFilter == null) return [queryParams, (data: T[]) => data];
    queryParams.set('global', asString(globalFilter));
    return [queryParams, (data: T[]) => matchSorter<T>(data, asString(globalFilter))];
}

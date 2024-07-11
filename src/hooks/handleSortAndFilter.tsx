import { MRT_RowData } from 'material-react-table';
import { SortDescriptor } from 'realm';
import { pipeR } from '../common/pipeR';


export function handleSortAndFilter<T extends MRT_RowData>(sorted?: SortDescriptor[], filtered?: string, filteredArgs?: unknown[], match?: (x: T[]) => T[]) {
    const f1 = (r: Realm.Results<T>) => (sorted != null && sorted.length > 0 ? r.sorted(sorted) : r);
    const f2 = (r: Realm.Results<T>) => (filtered != null && filtered.length > 2 ? r.filtered(filtered, ...(filteredArgs ?? [])) : r);
    const f3 = (r: Realm.Results<T>) => {
        const result = match != null ? match(Array.from(r)) : Array.from(r);
        console.log(`match-result`, result);
        return match != null ? match(Array.from(r)) : Array.from(r);
    };
    return pipeR(f1, f2, f3);
}

import { MRT_RowData } from 'material-react-table';
import { composeR } from './composeR.1';
import { getLookupFunction } from './getLookupFunction';

export function fromLookup<T extends MRT_RowData>(ctor: MyClass<T>, getter: SkuGetter<T | undefined>) {
    return composeR(getter, getLookupFunction(ctor));
}
export function fromMappedLookup(mapper: (x: string | undefined) => string | undefined) {
    return <T extends MRT_RowData>(ctor: MyClass<T>) =>
        (getter: SkuGetter<DBList<any> | undefined>) => {
            return composeR(getter, (x?: DBList<any>) => x?.length ?? 0 > 0 ? (x ?? []).map(composeR(getLookupFunction(ctor), mapper)).join('\n') : undefined);
        };
}

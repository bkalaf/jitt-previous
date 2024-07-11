import { MRT_RowData } from 'material-react-table';
import { composeR } from './composeR.1';
import { getLookupFunction } from './getLookupFunction';
import { ISku } from '../types';

export function fromLookup<T extends MRT_RowData>(ctor: MyClass<T>, getter: SkuGetter<T | undefined>) {
    return (sku: ISku) => {
        const value = composeR(getter, getLookupFunction(ctor))(sku);
        return value != null && value?.trim() !== '' ? value : undefined;
    }
}
export function fromMappedLookup(mapper: (x: string | undefined) => string | undefined) {
    return <T extends MRT_RowData>(ctor: MyClass<T>) =>
        (getter: SkuGetter<DBList<any> | undefined>) => {
            return composeR(getter, (x?: DBList<any>) => x?.length ?? 0 > 0 ? (x ?? []).map(composeR(getLookupFunction(ctor), mapper)).join('\n') : undefined);
        };
}

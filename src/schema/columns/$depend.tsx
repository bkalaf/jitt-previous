import { MRT_RowData } from 'material-react-table';

export const $depend = {
    notZeroOrNull: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'disable', property, dependency: ['or', { isNull: true }, { equalTo: 0 as T[TKey] }] }),
    notNilOrEmpty: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'disable', property, dependency: ['or', { isNull: true }, { equalTo: '' as T[TKey] }] }),
    isZeroOrNull: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'enable', property, dependency: ['or', { isNull: true }, { equalTo: 0 as T[TKey] }] }),
    isTrue: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'disable', property, dependency: ['or', { isNull: true }, { equalTo: false as T[TKey] }] }),
    isFalse: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'disable', property, dependency: { equalTo: true as T[TKey] } }),
    equalTo: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, equalTo: T[TKey], isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'enable', property, dependency: { equalTo } }),
    notEqualTo: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, equalTo: T[TKey], isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'enable', property, dependency: ['not', { equalTo }] }),
    in:
        <T extends MRT_RowData, TKey extends keyof T, TValue extends T[TKey] = T[TKey]>(property: TKey, isLocal = false) =>
        (...values: TValue[]): IDependency<T, TKey> => ({ isLocal, type: 'enable', property, dependency: { in: values } }),
    notIn:
        <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal = false) =>
        (...values: T[TKey][]): IDependency<T, TKey> => ({ isLocal, type: 'disable', property, dependency: { in: values } })
};

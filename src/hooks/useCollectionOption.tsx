import { MRT_RowData } from 'material-react-table';
import { useCallback, useMemo } from 'react';
import { deepEqual } from './deepEqual';

export function useCollectionOption<T extends MRT_RowData, TKey extends keyof JITTTableState<T>>(
    state: JITTTableState<T>,
    setState: StateSetter<Exclude<JITTTableState<T>, undefined>>,
    key: TKey,
    defaultValue: Exclude<JITTTableState<T>[TKey], undefined>
): [value: JITTTableState<T>[TKey], setValue: StateSetter<Exclude<JITTTableState<T>[TKey], undefined>>, reset: (x?: any) => void] {
    const value = useMemo(() => state[key], [key, state]);
    const onValueChange = useCallback(
        (updater: JITTTableState<T>[TKey] | ((old: JITTTableState<T>[TKey]) => JITTTableState<T>[TKey])) => {
            setState((old) => {
                const thisValue = key in old ? old[key] : undefined;
                const nextValue = (typeof updater === 'function' ? (updater as (old: JITTTableState<T>[TKey]) => JITTTableState<T>[TKey])(thisValue) : updater) ?? defaultValue;
                if (deepEqual(nextValue, thisValue)) {
                    console.log(`setState-equality`, nextValue, thisValue);
                    return old;
                }
                const newState = { ...old, [key]: nextValue };
                // $storage.setItem(key, newState);
                return newState;
            });
        },
        [defaultValue, key, setState]
    );
    const reset = useCallback(() => {
        onValueChange(defaultValue);
    }, [defaultValue, onValueChange]);
    return [value, onValueChange, reset];
}

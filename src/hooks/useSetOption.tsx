import { useCallback } from 'react';
import { deepEqual } from '../common/deepEqual';
import { MRT_RowData } from 'material-react-table';
import { CollectionOptionsConfig, setNestedValueForKey } from './CollectionOptionsConfig';

export function useSetOption<T extends MRT_RowData, TKey extends keyof JITTTableState<T>>(setConfig: StateSetter<CollectionOptionsConfig<T>>, collection: string, key: TKey) {
    const setter = useCallback(
        (updater: JITTTableState<T>[TKey] | ((value?: JITTTableState<T>[TKey]) => JITTTableState<T>[TKey] | undefined)) => {
            console.info('COLLECTION-SETTING-CHANGE', updater);
            setConfig((oldConfig) => {
                const current = collection in oldConfig ?
                    key in oldConfig[collection] ?
                        oldConfig[collection][key]
                        : undefined
                    : undefined;
                const value = typeof updater === 'function' ? (updater as (value?: JITTTableState<T>[TKey]) => JITTTableState<T>[TKey] | undefined)(current) : updater;
                if (deepEqual(current, value)) {
                    console.info(`useSetOption-EQUAL-VALUES`, current, value);
                    return oldConfig;
                }
                const newConfig = setNestedValueForKey(oldConfig, collection, key, value);
                if (deepEqual(newConfig, oldConfig)) {
                    console.info(`useSetOption-EQUAL-VALUES`, newConfig, oldConfig);
                    return oldConfig;
                }
                console.info(`useSetOption-NOT-EQUAL-VALUE`, newConfig, oldConfig);
                return newConfig;
            });
        },
        [collection, key, setConfig]
    );
    return setter;
}

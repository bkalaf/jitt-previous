import { useCallback, useMemo, useState } from 'react';
import { useEnv } from './useEnv';
import { deepEqual } from '../common/deepEqual';
import * as fs from 'graceful-fs';
import { MRT_RowData } from 'material-react-table';
import { useSetOption } from './useSetOption';
import { getTableSettingDefault } from './getTableSettingDefault';
import { CollectionOptionsConfig, setNestedValueForKey } from './CollectionOptionsConfig';
import { useLogger } from './useLogger';

export function useViewSettings<T extends MRT_RowData>(route: string): UseViewSettingsReturn<T> {
    const { COLLECTION_OPTIONS_CONFIG_FILE } = useEnv();
    const initialState = useMemo(() => ({ pagination: { pageSize: 20, pageIndex: 0 } }), []);
    const [collectionConfig, internalSetState] = useState<CollectionOptionsConfig<T>>(fs.existsSync(COLLECTION_OPTIONS_CONFIG_FILE) ? JSON.parse(fs.readFileSync(COLLECTION_OPTIONS_CONFIG_FILE).toString()) : {});

    const logger = useLogger();
    const setState = useCallback(
        (updater: CollectionOptionsConfig<T> | ((x: CollectionOptionsConfig<T>) => CollectionOptionsConfig<T>)) => {
            logger('useViewSetting.setState()', updater?.toString());
            internalSetState((oldConfig) => {
                const newConfig = typeof updater === 'function' ? updater(oldConfig) : updater;
                if (deepEqual(newConfig, oldConfig)) {
                    // console.info('internalSetState-is-equal', newConfig, oldConfig);
                    return oldConfig;
                }
                fs.writeFileSync(COLLECTION_OPTIONS_CONFIG_FILE, JSON.stringify(newConfig, null, '\t'));
                return newConfig;
            });
        },
        [COLLECTION_OPTIONS_CONFIG_FILE, logger]
    );
    const setCollectionState = useCallback(
        ({ value, collection }: { value: JITTTableState<T>; collection: keyof CollectionOptionsConfig<T> }) => {
            logger('useViewSetting.setCollectionState()')
            return setState((oldConfig) => ({ ...oldConfig, [collection]: { ...initialState, ...value } }));
        },
        [initialState, logger, setState]
    );
    const resetCollectionState = useCallback(
        ({ collection }: { collection: keyof CollectionOptionsConfig<T> }) => {
            logger('useViewSetting.resetCollectionState()');
            return () => setCollectionState({ collection, value: initialState });
        },
        [initialState, logger, setCollectionState]
    );
    const setCollectionOption = useCallback(
        <TKey extends keyof JITTTableState<T>>({ collection, option, value: settingValue }: { collection: keyof CollectionOptionsConfig<T>; option: TKey; value?: JITTTableState<T>[TKey] }) => {
            logger('useViewSetting.setCollectionOption()')
            const current: JITTTableState<T> = collection in collectionConfig ? collectionConfig[collection] : initialState;
            const opt = option in current ? current[option] : undefined;
            if (deepEqual(opt, settingValue ?? getTableSettingDefault(option))) {
                // console.info('setCollectionOption-EQUAL', opt, settingValue ?? getTableSettingDefault(option));
                return;
            }
            const nextConfig = setNestedValueForKey(collectionConfig, collection, option, settingValue ?? getTableSettingDefault(option));
            if (deepEqual(nextConfig, collectionConfig)) {
                // console.info('setCollectionOption-EQUAL', nextConfig, collectionConfig);
                return;
            }
            // console.info('CONFIG-CHANGE', nextConfig, collectionConfig);
            setState(nextConfig);
        },
        [collectionConfig, initialState, logger, setState]
    );
    const state = useMemo(() => (route in collectionConfig ? collectionConfig[route] : initialState), [route, initialState, collectionConfig]);

    const onColumnFiltersChange = useSetOption(setState, route, 'columnFilters');
    const onColumnOrderChange = useSetOption(setState, route, 'columnOrder');
    const onColumnPinningChange = useSetOption(setState, route, 'columnPinning');
    const onColumnSizingChange = useSetOption(setState, route, 'columnSizing');
    const onColumnVisibilityChange = useSetOption(setState, route, 'columnVisibility');
    const onDensityChange = useSetOption(setState, route, 'density');
    const onExpandedChange = useSetOption(setState, route, 'expanded');
    const onGlobalFilterChange = useSetOption(setState, route, 'globalFilter');
    const onGroupingChange = useSetOption(setState, route, 'grouping');
    const onPaginationChange = useSetOption(setState, route, 'pagination');
    const onRowSelectionChange = useSetOption(setState, route, 'rowSelection');
    const onShowColumnFiltersChange = useSetOption(setState, route, 'showColumnFilters');
    const onShowGlobalFilterChange = useSetOption(setState, route, 'showGlobalFilter');
    const onSortingChange = useSetOption(setState, route, 'sorting');

    return {
        state,
        initialState,
        resetCollectionState,
        onColumnFiltersChange,
        onColumnOrderChange,
        onColumnPinningChange,
        onColumnSizingChange,
        onColumnVisibilityChange,
        onDensityChange,
        onExpandedChange,
        onGlobalFilterChange,
        onGroupingChange,
        onPaginationChange,
        onRowSelectionChange,
        onShowColumnFiltersChange,
        onShowGlobalFilterChange,
        onSortingChange,
        setCollectionOption
    } as UseViewSettingsReturn<T>;
}

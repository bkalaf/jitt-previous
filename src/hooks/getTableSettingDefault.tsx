import { MRT_DensityState } from 'material-react-table';

export const defaultArray: any[] = [];
export const defaultObject: Record<string, any> = {};

export function getTableSettingDefault<TKey extends keyof JITTTableState<any>>(key: TKey): JITTTableState<any>[TKey] {
    switch (key) {
        case 'columnFilters':
        case 'columnOrder':
        case 'grouping':
        case 'sorting':
            return defaultArray;
        case 'columnSizing':
        case 'columnVisibility':
        case 'expanded':
        case 'rowSelection':
        case 'columnPinning':
            return defaultObject;
        case 'isLoading':
        case 'showGlobalFilter':
        case 'showColumnFilters':
            return false;
        case 'pagination':
            return { pageIndex: 0, pageSize: 20 };
        case 'globalFilter':
            return undefined;
        case 'density':
            return 'spacious' as MRT_DensityState;
    }
}

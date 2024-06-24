import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { converted } from '../../../schema/defs/colDBList';
import { ClothingCareMap } from '../../../schema/laundryCare';

export function FlattenedListTableCell<T extends MRT_RowData, TValue>(props: CellFunctionParams<T, ListBack<TValue>>) {
    useWhyDidIUpdate('FlattenedListTableCell', props);
    const {
        cell,
        column: {
            columnDef: { meta }
        }
    } = props;
    const { flattener } = meta ?? {};
    const $flattener = flattener ?? ((x?: ListBack<TValue>) => x?.map((item) => (item as any).toString()).join(', ') ?? '');
    const value = cell.getValue();
    return $flattener(value);
}

export const toFlattener = (section: keyof typeof ClothingCareMap) => (value?: ListBack<string>) => value?.map(converted(section)).join(', ') ?? '';

export function FlattenedClothingCareCell(section: keyof typeof ClothingCareMap) {
    return function FlattenedCCCell<T extends MRT_RowData, TValue>(props: CellFunctionParams<T, ListBack<TValue>>) {
        useWhyDidIUpdate('FlattenedListTableCell', props);
        const { cell } = props;
        const flattener = toFlattener(section);
        const $flattener = flattener ?? ((x?: ListBack<TValue>) => x?.map((item) => (item as any).toString()).join(', ') ?? '');
        const value = cell.getValue() ?? [];
        return $flattener(value as string[]);
    };
}

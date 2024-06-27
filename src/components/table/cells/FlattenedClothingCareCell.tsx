import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { ClothingCareMap } from '../../../schema/laundryCare';
import { toFlattener } from './toFlattener';


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

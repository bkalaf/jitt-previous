import dayjs from 'dayjs';

export const liComponents = {
    string: ((value?: string) => () => value ?? '') as ListItemCellComponent<string>,
    int: ((value?: number) => () => value?.toFixed(0) ?? '') as ListItemCellComponent<number>,
    double: ((value?: number) => () => value?.toString() ?? '') as ListItemCellComponent<number>,
    date: ((value?: Date) => () => (value == null ? '' : dayjs(value).format('YYYY/MM/DD'))) as ListItemCellComponent<Date>
};



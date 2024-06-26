import { is } from '../common/is';
import dayjs from 'dayjs';
import { getProperty } from '../common/object';
import { useTypes } from './useTypes';

const liComponents = {
    string: ((value?: string) => () => value ?? '') as ListItemCellComponent<string>,
    int: ((value?: number) => () => value?.toFixed(0) ?? '') as ListItemCellComponent<number>,
    double: ((value?: number) => () => value?.toString() ?? '') as ListItemCellComponent<number>,
    date: ((value?: Date) => () => (value == null ? '' : dayjs(value).format('YYYY/MM/DD'))) as ListItemCellComponent<Date>
};

export function useGetSchema(objectType: string) {
    const types = useTypes();
    const thisSchema = types.find((x) => x.name === objectType);
    return thisSchema;
}

export function useGetLabelProperty(objectType: string) {
    const thisSchema = useGetSchema(objectType);
    if (is.primitive(objectType)) {
        return undefined;
    }
    if (thisSchema == null) throw new Error(`no schema for ${objectType}`);
    if (thisSchema.ctor != null && 'labelProperty' in thisSchema.ctor) {
        return thisSchema.ctor.labelProperty as string;
    }
    throw new Error(`no labelProperty for : ${objectType}`);
}

export function useGetLIComponent<T = unknown>(objectType: string): ListItemCellComponent<T> {
    const thisSchema = useGetSchema(objectType);
    if (is.primitive(objectType)) {
        return liComponents[objectType as keyof typeof liComponents] as ListItemCellComponent<T>;
    }
    if (thisSchema == null) throw new Error(`no schema for ${objectType}`);
    if (thisSchema.ctor != null && 'liComponent' in thisSchema.ctor) {
        return thisSchema.ctor.liComponent as ListItemCellComponent<T>;
    }
    if (thisSchema.ctor != null && 'labelProperty' in thisSchema.ctor) {
        return (value?: T) => () => (value != null ? getProperty((thisSchema.ctor as any).labelProperty as string, value as any) : '');
    }
    throw new Error(`no liComponent for : ${objectType}`);
}

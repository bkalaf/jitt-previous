import { is } from '../common/is';
import { getProperty } from '../common/object/getProperty';
import { useGetSchema } from './useGetSchema';
import { liComponents } from './liComponents';

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

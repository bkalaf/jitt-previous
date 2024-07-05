import { is } from '../common/is';
import { useGetSchema } from './useGetSchema';
import { liComponents } from './liComponents';
import { useMemo } from 'react';
import { getLookupFunction } from '../common/getLookupFunction';
import { konst } from '../common/konst';

export function useGetLIComponent<T = unknown>(objectType: string): (value?: any) => React.ReactNode {
    const thisSchema = useGetSchema(objectType);
    return useMemo(
        () =>
            is.primitive(objectType) ? (value: any) => (liComponents[objectType as keyof typeof liComponents] as ListItemCellComponent<T>)(value)({})
            : thisSchema != null ? (value: any) => getLookupFunction(thisSchema?.ctor as any)(value)
            : konst(''),
        [objectType, thisSchema]
    );
    // return useMemo(
    //     () =>
    //         is.primitive(objectType) ? (liComponents[objectType as keyof typeof liComponents] as ListItemCellComponent<T>)
    //         : thisSchema == null ? () => () => undefined
    //         // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //         : 'labelProperty' in thisSchema.ctor ? ((value: any) => (props: Record<string, any>) => getProperty((thisSchema.ctor as any).labelProperty as string ?? '', value))
    //         : thisSchema.ctor.liComponent,
    //     [objectType, thisSchema]
    // );
    // if (is.primitive(objectType)) {
    //     return liComponents[objectType as keyof typeof liComponents] as ListItemCellComponent<T>;
    // }
    // if (thisSchema == null) throw new Error(`no schema for ${objectType}`);
    // if (thisSchema.ctor != null && 'liComponent' in thisSchema.ctor) {
    //     return thisSchema.ctor.liComponent as ListItemCellComponent<T>;
    // }
    // if (thisSchema.ctor != null && 'labelProperty' in thisSchema.ctor) {
    //     return (value?: T) => () => (value != null ? getProperty((thisSchema.ctor as any).labelProperty as string, value as any) : '');
    // }
    // throw new Error(`no liComponent for : ${objectType}`);
}

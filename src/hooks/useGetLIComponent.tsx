import { schema } from '../schema';
import { is } from '../common/is';
import { liComponents } from './liComponents';


export function useGetLIComponent<T = unknown>(objectType: string) {
    // const db = useLocalRealm();
    if (is.primitive(objectType)) {
        return liComponents[objectType] as ListItemCellComponent<T>;
    }
    const thisSchema = schema.find((x) => x.name === objectType);
    if (thisSchema == null) throw new Error(`no schema for : ${objectType}`);
    if ('liComponent' in thisSchema) {
        return thisSchema.liComponent;
    }
    throw new Error(`no liComponent for : ${objectType}`);
}

export function useGetLabelProperty(objectType: string) {
    // const db = useLocalRealm();
    if (is.primitive(objectType)) {
        return undefined;
    }
    const thisSchema = schema.find((x) => x.name === objectType);
    if (thisSchema == null) throw new Error(`no schema for : ${objectType}`);
    if ('labelProperty' in thisSchema) {
        return thisSchema.labelProperty;
    }
    throw new Error(`no labelProperty for : ${objectType}`);
}
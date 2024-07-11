import { useEffectiveCollection } from './useEffectiveCollection';

export function useCollectionSchema(objectType?: string) {
    const route = useEffectiveCollection(objectType);
    // const types = useTypes();
    // console.info(`types`, types, 'effectiveCollection', route);
    // const objSchema = useMemo(() => types.find((x) => x.name === route), [route, types]);
    // if (objSchema == null) throw new Error(`no object schema: objectType: ${objectType} route: ${route}`);
    return window.schema[route];
}

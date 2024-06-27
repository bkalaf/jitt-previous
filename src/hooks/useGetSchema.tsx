import { useTypes } from './useTypes';


export function useGetSchema(objectType: string) {
    const types = useTypes();
    const thisSchema = types.find((x) => x.name === objectType);
    return thisSchema;
}

import { is } from '../common/is';
import { useGetSchema } from './useGetSchema';

export function useGetLabelProperty(objectType: string) {
    const thisSchema = useGetSchema(objectType);
    if (objectType === 'n/a') return 'text';
    if (is.primitive(objectType)) {
        return undefined;
    }
    if (thisSchema == null) throw new Error(`no schema for ${objectType}`);
    if (thisSchema != null && 'labelProperty' in thisSchema) {
        return thisSchema.labelProperty as string;
    }
    throw new Error(`no labelProperty for : ${objectType}`);
}

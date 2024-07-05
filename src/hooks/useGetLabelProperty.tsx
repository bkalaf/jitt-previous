import { is } from '../common/is';
import { useGetSchema } from './useGetSchema';

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

import { useCallback, useMemo } from 'react';
import { convert as $convert, isPrimitive } from '../schema/conversion/cnvrt';
import { useTypes } from './useTypes';

export function useConvert(type: string, objectType: string) {
    const types = useTypes();
    const convert  = useMemo(() => $convert(types as any, objectType), [objectType, types]);
    return useCallback(
        (values: any) => {
            console.info(`attempting convert: ${type} ${objectType}`);
            if (type === 'list' || type === 'set') {
                if (objectType == null) throw new Error(`no objectType: ${type}`);
                if (isPrimitive(objectType)) {
                    return convert(values.value);
                }
                return convert(values.value);
            }
            if (type === 'dictionary') {
                if (objectType == null) throw new Error(`no objectType: ${type}`);
                return { key: values.key, value: convert(values.value) };
            }
            if (type === 'object') {
                return convert(values);
            }
            return convert(values);
        },
        [convert, objectType, type]
    );
}


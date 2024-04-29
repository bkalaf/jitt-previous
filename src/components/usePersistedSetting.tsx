import { useCallback, useEffect, useState } from 'react';
import { getProperty } from '../common/object';
import { useForager } from '../contexts/ForagerContext';

export function useProvideSettings<T>(initialValue: T) {
    const { forager } = useForager();
    const [value, setValue] = useState<AppSettings<T>>({});
    const setSetting = useCallback((collection: string, key: string) => {
        return (item: T) => setValue(old => {
            const collectionSettings = getProperty(collection, old) ?? {};
            const newValue = { ...collectionSettings, [key]: item ?? initialValue };
            return { ...old, [collection]: newValue };
        });
    }, [initialValue]);
    const getSetting = useCallback((collection: string, key: string) => () => {
        const collectionSettings = getProperty(collection, value) as Record<string, T> ?? {} as Record<string, T>;
        return collectionSettings[key];
    }, [value]);
    useEffect(() => {
        forager.setItem('settings', value);
    }, [forager, value]);
    useEffect(() => {
        forager.getItem<AppSettings<T>>('settings').then(obj => setValue(obj ?? {}));
    }, [forager]);
    return {
        getSetting,
        setSetting
    };
}
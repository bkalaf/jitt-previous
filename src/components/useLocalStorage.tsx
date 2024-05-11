import { useCallback, useMemo } from 'react';
import { ignore } from './ignore';


export function useLocalStorage(): <T>(type: TypeOf) => DBStorage<T> {
    const getItem = useCallback(function <T>(type: TypeOf) {
        return (key: string): T => {
            const value = localStorage.getItem(key);
            function inner() {
                switch (type) {
                    case 'undefined':
                        return undefined;
                    case 'string':
                        return value as string;
                    case 'number':
                    case 'bigint':
                        return value == null ? undefined : parseFloat(value as string);
                    case 'boolean':
                        return value == null ? undefined : value === 'true';
                    case 'symbol':
                        return value == null ? undefined : Symbol.for(value as string);
                    case 'object':
                        return value == null || value === 'undefined' ? undefined : JSON.parse(value as string) as T;
                    case 'function':
                        return undefined;
                }
            }
            return inner() as T;
        };
    }, []);
    const setItem = useCallback(function <T>(type: TypeOf) {
        return (key: string, value: T) => {
            function inner() {
                switch (type) {
                    case 'string':
                        return localStorage.setItem(key, (value as string)?.toString());
                    case 'number':
                    case 'bigint':
                        return localStorage.setItem(key, (value as number)?.toString());
                    case 'boolean':
                        return localStorage.setItem(key, (value as boolean)?.toString());
                    case 'symbol':
                        return localStorage.setItem(key, (value as symbol)?.toString());
                    case 'undefined':
                        return;
                    case 'object':
                    case 'function':
                        return value == null ? localStorage.setItem(key, JSON.stringify(value as any[] | Record<string, any>)) : ignore();
                }
            }
            inner();
        };
    }, []);
    return useMemo(() => function <T>(type: TypeOf) {
        return {
            getItem: getItem<T>(type),
            setItem: setItem<T>(type)
        };
    }, [getItem, setItem]);
}

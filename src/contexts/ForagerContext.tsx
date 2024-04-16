import { createContext, useMemo } from 'react';
import { useContxt } from './useContxt';
import localforage from 'localforage';

export type IForagerContext = {
    forager: LocalForage;
}

export const ForagerContext = createContext<IForagerContext | undefined>(undefined);

export function useForager() {
    return useContxt('ForageContext', ForagerContext);
}

export function useProvideForagerContext() {
    const forager = useMemo(() => localforage.createInstance({ name: 'realm', storeName: 'jitt' }), [])
    return useMemo(() => ({ forager }), [forager]);
}


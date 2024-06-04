import { RealmContext } from './RealmContext';
import React from 'react';
import { useProvideRealmPromiseContext } from '../hooks/useProvideRealmPromiseContext';

export function RealmProvider({ children }: { children: Children }) {
    const value = useProvideRealmPromiseContext();
    return <React.Suspense fallback={<div>Loading...</div>}>
        <RealmContext.Provider value={value}>{children}</RealmContext.Provider>
    </React.Suspense>;
}

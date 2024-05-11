import { useEffect, useMemo, useState } from 'react';
import { useEnv } from '../hooks/useEnv';
import { openRealm } from './openRealm';
import { IRealmContext } from './RealmContext';
import Realm from 'realm';
import { useAsyncResource } from 'use-async-resource';

export function useProvideRealmPromiseContext(): IRealmContext{
    const { REALM_APP_ID, REALM_PASSWORD, REALM_USER } = useEnv();
    const app = useMemo(() => new Realm.App(REALM_APP_ID), [REALM_APP_ID]);
    const [user, setUser] = useState<Realm.User | null>(app.currentUser);
    useEffect(() => {
        if (user == null) {
            app.logIn(Realm.Credentials.emailPassword({ email: REALM_USER, password: REALM_PASSWORD })).then(setUser).then(() => console.info('USER LOGGED IN'));
        }
    }, [REALM_PASSWORD, REALM_USER, app, user])
    const [realmResource] = useAsyncResource(async () => {
        try {
            if (user == null) return undefined;
            const result = await openRealm(REALM_USER)(user);
            // enqueueSnackbar({ preventDuplicate: true, autoHideDuration: 5000, message: `Local db opened!`, variant: 'success' });
            return result;
        } catch (error) {
            // enqueueSnackbar({ preventDuplicate: true, autoHideDuration: 6000, message: error.message, variant: 'error' });
            console.error(error);
            throw error;
        }
    }, []);
    console.log(app, user, realmResource);
    return useMemo(() => ({
        realmResource,
        app,
        user
    }), [app, realmResource, user])
}

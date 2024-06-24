import { useEffect, useMemo, useRef, useState } from 'react';
import { useEnv } from './useEnv';
import { openRealm } from '../contexts/openRealm';
import { IRealmContext } from '../contexts/RealmContext';
import Realm from 'realm';
import { useAsyncResource } from 'use-async-resource';
import { EntityBase } from '../schema/entity/EntityBase';

export function useProvideRealmPromiseContext(): IRealmContext {
    const { REALM_APP_ID, REALM_PASSWORD, REALM_USER } = useEnv();
    const app = useMemo(() => new Realm.App(REALM_APP_ID), [REALM_APP_ID]);
    const [user, setUser] = useState<Realm.User | null>(app.currentUser);
    const isInit = useRef(false);
    useEffect(() => {
        if (user == null) {
            app.logIn(Realm.Credentials.emailPassword({ email: REALM_USER, password: REALM_PASSWORD }))
                .then(setUser)
                .then(() => console.info('USER LOGGED IN'));
        }
    }, [REALM_PASSWORD, REALM_USER, app, user]);
    const [realmResource] = useAsyncResource(async () => {
        try {
            if (user == null) return undefined;
            const result = await openRealm(REALM_USER)(user);
            // enqueueSnackbar({ preventDuplicate: true, autoHideDuration: 5000, message: `Local db opened!`, variant: 'success' });
            if (!isInit.current) {
                if (EntityBase.localRealm == null && result != null) {
                    EntityBase.localRealm = result;
                    isInit.current = true;
                }
            }
            return result;
        } catch (error) {
            // enqueueSnackbar({ preventDuplicate: true, autoHideDuration: 6000, message: error.message, variant: 'error' });
            console.error(error);
            throw error;
        }
    }, []);
    console.log(app, user, realmResource);
    return useMemo(
        () => ({
            realmResource,
            app,
            user
        }),
        [app, realmResource, user]
    );
}

import { useEffect, useMemo, useState } from 'react';
import { useEnv } from './useEnv';
import { IRealmContext } from '../contexts/RealmContext';
import Realm from 'realm';
import { $REALM } from '../$realm';
import { ignore } from '../common/ignore';

export function useProvideRealmPromiseContext(): IRealmContext {
    const { REALM_APP_ID, REALM_PASSWORD, REALM_USER } = useEnv();
    const app = useMemo(() => new Realm.App(REALM_APP_ID), [REALM_APP_ID]);
    const [user, setUser] = useState<Realm.User | null>(app.currentUser);
    useEffect(() => {
        if (user == null) {
            app.logIn(Realm.Credentials.emailPassword({ email: REALM_USER, password: REALM_PASSWORD }))
                .then(setUser)
                .then(() => ignore());
        }
    }, [REALM_PASSWORD, REALM_USER, app, user]);
    const [realmResource] = [() => $REALM];
    // const [realmResource] = useAsyncResource(async () => {
    //     try {
    //         if (user == null) return undefined;
    //         const result = await openRealm(REALM_USER)(user);
    //         // enqueueSnackbar({ preventDuplicate: true, autoHideDuration: 5000, message: `Local db opened!`, variant: 'success' });
    //         if (!isInit.current) {
    //             if (EntityBase.localRealm == null && result != null) {
    //                 EntityBase.localRealm = result;
    //                 isInit.current = true;
    //             }
    //         }
    //         if (window.schema == null) {
    //             window.schema = {}; 
    //             window.schema.string = { name: 'string', columns: primitives.string as MRT_ColumnDef<any>[] } as any;
    //             window.schema.int = { name: 'int', columns: primitives.int as MRT_ColumnDef<any>[] } as any;
    //             window.schema.double = { name: 'double', columns: primitives.double as MRT_ColumnDef<any>[] } as any;
    //             window.schema.bool = { name: 'bool', columns: primitives.string as MRT_ColumnDef<any>[] } as any;
    //             window.schema.date = { name: 'date', columns: primitives.date as MRT_ColumnDef<any>[] } as any;
    //         }
    //         result?.schema.forEach(item => {
    //             if (item.ctor) {
    //                 window.schema[item.name] = item.ctor as any;
    //             }
    //         });
    //         return result;
    //     } catch (error) {
    //         // enqueueSnackbar({ preventDuplicate: true, autoHideDuration: 6000, message: error.message, variant: 'error' });
    //         console.error(error);
    //         throw error;
    //     }
    // }, []);
    // console.log(app, user, realmResource);
    return useMemo(
        () => ({
            realmResource,
            app,
            user
        }),
        [app, realmResource, user]
    );
}

import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import Realm from 'realm';
import { schema } from '../schema';
import { convert } from '../schema/conversion/cnvrt';
import { useEnv } from '../hooks/useEnv';
import { useSnackbar } from 'notistack';

export type IRealmContext = {
    app: Realm.App;
    user: Realm.User | undefined;
    db: Realm | undefined;
    types: RealmSchema;
    convert: (objectType: string) => (value: any) => any;
};

export const RealmContext = createContext<undefined | IRealmContext>(undefined);

export function useProvideRealmContext() {
    const [types, setTypes] = useState<RealmSchema>([]);
    const { REALM_APP_ID, REALM_PASSWORD, REALM_USER } = useEnv();
    const app = useMemo(() => new Realm.App(REALM_APP_ID), [REALM_APP_ID]);
    const [user, setUser] = useState<undefined | Realm.User>(app.currentUser ?? undefined);
    const [db, setDB] = useState<Realm | undefined>(undefined);
    const { enqueueSnackbar } = useSnackbar();
    const logIn = useCallback(async () => {
        if (user == null) {
            const u = await app.logIn(Realm.Credentials.emailPassword({ email: REALM_USER, password: REALM_PASSWORD }));
            setUser(u);
        }
    }, [user, app, REALM_USER, REALM_PASSWORD]);
    // const logOut = useCallback(async () => {
    //     if (user != null) {
    //         await user.logOut();
    //         setUser(undefined);
    //     }
    // }, [setUser, user]);
    useEffect(() => {
        const func = async () => {
            if (!user) {
                await logIn();
            }
        };
        func().then(() => enqueueSnackbar('USER LOGGED IN.', { variant: 'success' }));
    }, [user, logIn, enqueueSnackbar]);
    useEffect(() => {
        const func = async () => {
            if (user && !db) {
                const realm = await Realm.open({
                    schema: schema,
                    sync: {
                        partitionValue: REALM_USER,
                        user,
                        newRealmFileBehavior: {
                            type: Realm.OpenRealmBehaviorType.DownloadBeforeOpen,
                            timeOut: 1000 * 60 * 5,
                            timeOutBehavior: Realm.OpenRealmTimeOutBehavior.ThrowException
                        },
                        existingRealmFileBehavior: {
                            type: Realm.OpenRealmBehaviorType.DownloadBeforeOpen,
                            timeOut: 1000 * 60 * 5,
                            timeOutBehavior: Realm.OpenRealmTimeOutBehavior.ThrowException
                        }
                    }
                });
                setDB(realm);
                setTypes(realm.schema);
            } else if (!user && db) {
                setDB(undefined);
            }
        };
        func().then(() => enqueueSnackbar('DATABASE OPENED.', { variant: 'success' }));
    }, [user, db, setDB, REALM_USER, enqueueSnackbar]);
    return useMemo(
        () => ({
            user,
            app,
            db,
            types,
            convert: (objectType: string) => convert(types, objectType)
        }),
        [user, app, db, types]
    );
}

export function RealmProvider({ children }: { children: Children }) {
    const value = useProvideRealmContext();
    return <RealmContext.Provider value={value}>{children}</RealmContext.Provider>;
}

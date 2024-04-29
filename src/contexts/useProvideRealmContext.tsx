import { useCallback, useEffect, useMemo, useState } from 'react';
import Realm from 'realm';
import { schema } from '../schema';
import { convert, isDataStructure, isPrimitive } from '../schema/conversion/cnvrt';
import { useEnv } from '../hooks/useEnv';
import { useSnackbar } from 'notistack';
import { useLogger } from './useLogger';

export function useProvideRealmContext() {
    const [types, _setTypes] = useState<RealmSchema>([]);
    const setTypes = useCallback((newValue: RealmSchema) => {
        console.warn('SET TYPES CHANGE');
        alert('SET TYPES CHANGE');
        _setTypes((old) => {
            console.info(`setTypes`, newValue, old);
            if (old.length !== newValue.length) {
                return newValue;
            }
            return old;
        });
    }, []);
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
    }, [user, db, setDB, REALM_USER, enqueueSnackbar, setTypes]);
    const { info } = useLogger();
    const getObjectSchemaByTypeInfo = useCallback(
        (type: string, objectType: string): undefined | Realm.ObjectSchema => {
            info('getObjectSchemaByTypeInfo', type, objectType, types);
            if (isPrimitive(type)) return undefined;
            if (isDataStructure(type)) {
                if (isPrimitive(objectType)) return undefined;
                const objectSchema = types.find((x) => x.name === objectType);
                info('getObjectShcemaByTypeInfo.return', objectSchema);
                return objectSchema as ArrayOf<RealmSchema>;
            }
            if (type === 'object') {
                const objectSchema = types.find((x) => x.name === objectType);
                info('getObjectShcemaByTypeInfo.return', objectSchema);
                return objectSchema as ArrayOf<RealmSchema>;
            }
            const objectSchema = types.find((x) => x.name === type);
            info('getObjectShcemaByTypeInfo.return', objectSchema);
            return objectSchema as ArrayOf<RealmSchema>;
        },
        [info, types]
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getTableCanExpand = useCallback(
        (route: string) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const schema = getObjectSchemaByTypeInfo('object', route);
            if (schema == null) throw new Error('no schema found');
            const { properties } = schema;
            return Object.keys(properties).includes('subRows');
        },
        [getObjectSchemaByTypeInfo]
    );
    // console.info('***', getObjectSchemaByTypeInfo('string', ''))
    // console.info('***', getObjectSchemaByTypeInfo('list', 'selfStorage'))
    // console.info('***', getObjectSchemaByTypeInfo('classifier', ''))
    // console.info('***', getObjectSchemaByTypeInfo('object', 'classifier'))
    // console.info('***', getObjectSchemaByTypeInfo('object', 'facility'))

    return useMemo(
        () => ({
            user,
            app,
            db,
            types,
            convert: (objectType: string) => convert(types, objectType),
            getTableCanExpand,
            getObjectSchemaByTypeInfo
        }),
        [user, app, db, types, getTableCanExpand, getObjectSchemaByTypeInfo]
    );
}

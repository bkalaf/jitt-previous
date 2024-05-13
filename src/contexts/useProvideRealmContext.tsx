// export function useProvideRealmContext(): IRealmContext {
//     const { REALM_APP_ID, REALM_USER } = useEnv();
//     const app = useMemo(() => new Realm.App(REALM_APP_ID), [REALM_APP_ID]);
//     const { info } = useLogger();
//     // const [currentUser, setCurrentUser] = useState(app.currentUser);
//     // const logIn = useCallback(async () => {
//     //     info('logIn');
//     //     try {
//     //         const result = await app.logIn(Realm.Credentials.emailPassword({ email: REALM_USER, password: REALM_PASSWORD }));
//     //         enqueueSnackbar({ preventDuplicate: true, autoHideDuration: 5000, message: `Welcome, ${result.profile.email}!`, variant: 'success' });
//     //         setCurrentUser(result);
//     //         return result;
//     //     } catch (error) {
//     //         enqueueSnackbar({ preventDuplicate: true, autoHideDuration: 6000, message: error.message, variant: 'error' });
//     //         console.error(error);
//     //         throw error;
//     //     }
//     // }, [REALM_PASSWORD, REALM_USER, app, enqueueSnackbar, info]);
    
//     const openDB = useMemo(async () => {
//         try {
//             const result = await openRealm(REALM_USER)(app.currentUser);
//             // enqueueSnackbar({ preventDuplicate: true, autoHideDuration: 5000, message: `Local db opened!`, variant: 'success' });
//             return result;
//         } catch (error) {
//             // enqueueSnackbar({ preventDuplicate: true, autoHideDuration: 6000, message: error.message, variant: 'error' });
//             console.error(error);
//             throw error;
//         }
        
//     }, [REALM_USER, app.currentUser]);
//     const realm = use(openDB);
//     const [transfer, setTransfer] = useState<{ total: number; todo: number }>({ total: 0, todo: 0 });
//     const types = useCallback((): RealmSchema => realm?.schema ?? [], [realm]);
//     useEffect(() => {
//         const func = (transferred: number, total: number) => {
//             const todo = total - transferred;
//             setTransfer({ todo, total });
//         };
//         realm?.syncSession?.addProgressNotification(ProgressDirection.Download, ProgressMode.ForCurrentlyOutstandingWork, func);
//         return () => realm?.syncSession?.removeProgressNotification(func);
//     }, [realm]);
//     const convertType = useCallback((objectType: string) => convert(types(), objectType), [types]);
//     const getObjectSchemaByTypeInfo = useCallback(
//         (type: string, objectType: string): undefined | Realm.ObjectSchema => {
//             info('getObjectSchemaByTypeInfo', type, objectType, types());
//             if (isPrimitive(type)) return undefined;
//             if (isDataStructure(type)) {
//                 if (isPrimitive(objectType)) return undefined;
//                 const objectSchema = types().find((x) => x.name === objectType);
//                 info('getObjectShcemaByTypeInfo.return', objectSchema);
//                 return objectSchema as ArrayOf<RealmSchema>;
//             }
//             if (type === 'object') {
//                 const objectSchema = types().find((x) => x.name === objectType);
//                 info('getObjectShcemaByTypeInfo.return', objectSchema);
//                 return objectSchema as ArrayOf<RealmSchema>;
//             }
//             const objectSchema = types().find((x) => x.name === type);
//             info('getObjectShcemaByTypeInfo.return', objectSchema);
//             return objectSchema as ArrayOf<RealmSchema>;
//         },
//         [info, types]
//     );
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const getTableCanExpand = useCallback(
//         (route: string) => {
//             // eslint-disable-next-line @typescript-eslint/no-unused-vars
//             const schema = getObjectSchemaByTypeInfo('object', route);
//             if (schema == null) throw new Error('no schema found');
//             const { properties } = schema;
//             return Object.keys(properties).includes('subRows');
//         },
//         [getObjectSchemaByTypeInfo]
//     );

//     return useMemo(
//         () => ({
//             app,
//             user: app.currentUser,
//             db: realm,
//             types,
//             transfer,
//             convert: convertType,
//             getObjectSchemaByTypeInfo,
//             getTableCanExpand
//         }),
//         [app, convertType, getObjectSchemaByTypeInfo, getTableCanExpand, realm, transfer, types]
//     );
// }
// export function useProvideRealmContext2() {
//     const [types, _setTypes] = useState<RealmSchema>([]);
//     const setTypes = useCallback((newValue: RealmSchema) => {
//         console.warn('SET TYPES CHANGE');
//         alert('SET TYPES CHANGE');
//         _setTypes((old) => {
//             console.info(`setTypes`, newValue, old);
//             if (old.length !== newValue.length) {
//                 return newValue;
//             }
//             return old;
//         });
//     }, []);
//     const { REALM_APP_ID, REALM_PASSWORD, REALM_USER } = useEnv();
//     const app = useMemo(() => new Realm.App(REALM_APP_ID), [REALM_APP_ID]);
//     const [user, setUser] = useState<undefined | Realm.User>(app.currentUser ?? undefined);
//     const [db, setDB] = useState<Realm | undefined>(undefined);
//     const { enqueueSnackbar } = useSnackbar();
//     const logIn = useCallback(async () => {
//         if (user == null) {
//             const u = await app.logIn(Realm.Credentials.emailPassword({ email: REALM_USER, password: REALM_PASSWORD }));
//             setUser(u);
//         }
//     }, [user, app, REALM_USER, REALM_PASSWORD]);
//     // const logOut = useCallback(async () => {
//     //     if (user != null) {
//     //         await user.logOut();
//     //         setUser(undefined);
//     //     }
//     // }, [setUser, user]);
//     useEffect(() => {
//         const func = async () => {
//             if (!user) {
//                 await logIn();
//             }
//         };
//         func().then(() => enqueueSnackbar('USER LOGGED IN.', { variant: 'success' }));
//     }, [user, logIn, enqueueSnackbar]);
//     const [resource] = useAsyncResource((u: Realm.User) =>
//         Realm.open({
//             schema: schema,
//             sync: {
//                 partitionValue: REALM_USER,
//                 user: u,
//                 newRealmFileBehavior: {
//                     type: Realm.OpenRealmBehaviorType.DownloadBeforeOpen,
//                     timeOut: 1000 * 60 * 5,
//                     timeOutBehavior: Realm.OpenRealmTimeOutBehavior.ThrowException
//                 },
//                 existingRealmFileBehavior: {
//                     type: Realm.OpenRealmBehaviorType.OpenImmediately,
//                     timeOut: 1000 * 60 * 5,
//                     timeOutBehavior: Realm.OpenRealmTimeOutBehavior.ThrowException
//                 }
//             }
//         })
//     );
//     const r = resource();
//     console.log(`realm`, r);
//     useEffect(() => {
//         const func = async () => {
//             if (user && !db) {
//                 const realm = await Realm.open({
//                     schema: schema,
//                     sync: {
//                         partitionValue: REALM_USER,
//                         user,
//                         newRealmFileBehavior: {
//                             type: Realm.OpenRealmBehaviorType.DownloadBeforeOpen,
//                             timeOut: 1000 * 60 * 5,
//                             timeOutBehavior: Realm.OpenRealmTimeOutBehavior.ThrowException
//                         },
//                         existingRealmFileBehavior: {
//                             type: Realm.OpenRealmBehaviorType.OpenImmediately,
//                             timeOut: 1000 * 60 * 5,
//                             timeOutBehavior: Realm.OpenRealmTimeOutBehavior.ThrowException
//                         }
//                     }
//                 });
//                 realm.syncSession?.addProgressNotification(ProgressDirection.Download, ProgressMode.ForCurrentlyOutstandingWork, (transferred, transferrable) => console.info(`progress: ${transferred / transferrable}`));
//                 setDB(realm);
//                 setTypes(realm.schema);
//             } else if (!user && db) {
//                 setDB(undefined);
//             }
//         };
//         func().then(() => enqueueSnackbar('DATABASE OPENED.', { variant: 'success' }));
//     }, [user, db, setDB, REALM_USER, enqueueSnackbar, setTypes]);
//     const { info } = useLogger();
//     const getObjectSchemaByTypeInfo = useCallback(
//         (type: string, objectType: string): undefined | Realm.ObjectSchema => {
//             info('getObjectSchemaByTypeInfo', type, objectType, types);
//             if (isPrimitive(type)) return undefined;
//             if (isDataStructure(type)) {
//                 if (isPrimitive(objectType)) return undefined;
//                 const objectSchema = types.find((x) => x.name === objectType);
//                 info('getObjectShcemaByTypeInfo.return', objectSchema);
//                 return objectSchema as ArrayOf<RealmSchema>;
//             }
//             if (type === 'object') {
//                 const objectSchema = types.find((x) => x.name === objectType);
//                 info('getObjectShcemaByTypeInfo.return', objectSchema);
//                 return objectSchema as ArrayOf<RealmSchema>;
//             }
//             const objectSchema = types.find((x) => x.name === type);
//             info('getObjectShcemaByTypeInfo.return', objectSchema);
//             return objectSchema as ArrayOf<RealmSchema>;
//         },
//         [info, types]
//     );
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const getTableCanExpand = useCallback(
//         (route: string) => {
//             // eslint-disable-next-line @typescript-eslint/no-unused-vars
//             const schema = getObjectSchemaByTypeInfo('object', route);
//             if (schema == null) throw new Error('no schema found');
//             const { properties } = schema;
//             return Object.keys(properties).includes('subRows');
//         },
//         [getObjectSchemaByTypeInfo]
//     );
//     // console.info('***', getObjectSchemaByTypeInfo('string', ''))
//     // console.info('***', getObjectSchemaByTypeInfo('list', 'selfStorage'))
//     // console.info('***', getObjectSchemaByTypeInfo('classifier', ''))
//     // console.info('***', getObjectSchemaByTypeInfo('object', 'classifier'))
//     // console.info('***', getObjectSchemaByTypeInfo('object', 'facility'))

//     return useMemo(
//         () => ({
//             user,
//             app,
//             db,
//             types,
//             convert: (objectType: string) => convert(types, objectType),
//             getTableCanExpand,
//             getObjectSchemaByTypeInfo
//         }),
//         [user, app, db, types, getTableCanExpand, getObjectSchemaByTypeInfo]
//     );
// }

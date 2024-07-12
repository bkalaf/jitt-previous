import { createContext } from 'react';
import Realm from 'realm';

export type IRealmContext = {
    app: Realm.App;
    user: Realm.User | null;
    // db: Realm | undefined;
    // types: () => RealmSchema;
    // convert: (objectType: string) => (value: any) => any;
    // getTableCanExpand: (objectType: string) => boolean;
    // getObjectSchemaByTypeInfo: (type: string, objectType: string) => undefined  | Realm.ObjectSchema;
    realmResource: () => Realm;
};

export const RealmContext = createContext<undefined | IRealmContext>(undefined);

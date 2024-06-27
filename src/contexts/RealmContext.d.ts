/// <reference types="react" />
import Realm from 'realm';
import { DataOrModifiedFn } from 'use-async-resource';
export type IRealmContext = {
    app: Realm.App;
    user: Realm.User | null;
    realmResource: DataOrModifiedFn<Realm | undefined>;
};
export declare const RealmContext: import("react").Context<IRealmContext | undefined>;

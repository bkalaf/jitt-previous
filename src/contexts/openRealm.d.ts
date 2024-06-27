import Realm from 'realm';
export declare function openRealm(partitionValue: string): (user: Realm.User | null) => Promise<Realm | undefined>;

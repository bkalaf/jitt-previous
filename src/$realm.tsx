import Realm from 'realm';
import { schema } from './schema/schema';
import { sleep } from './scripts/sleep';
import { EntityBase } from './schema/entity/EntityBase';
import { MRT_ColumnDef } from 'material-react-table';
import { primitives } from './hooks/primtivies';
import { ignore } from './common/ignore';

export const appID = process.env.REALM_APP_ID ?? '';
export const email = process.env.REALM_USER ?? '';
export const password = process.env.REALM_PASSWORD ?? '';

export const realmApp = new Realm.App(appID);
export const signIn = async () => {
    if (realmApp.currentUser == null) {
        return realmApp.logIn(Realm.Credentials.emailPassword({ email, password }));
    }
    return Promise.resolve(realmApp.currentUser);
};

export let $REALM: Realm;
export const localRealm = async () => {
    const user = await signIn();
    const result = await Realm.open({
        schema,
        sync: {
            partitionValue: user.profile.email ?? 'n/a',
            user,
            newRealmFileBehavior: {
                type: Realm.OpenRealmBehaviorType.OpenImmediately,
                timeOut: 1000 * 60 * 5,
                timeOutBehavior: Realm.OpenRealmTimeOutBehavior.ThrowException
            },
            existingRealmFileBehavior: {
                type: Realm.OpenRealmBehaviorType.OpenImmediately,
                timeOut: 1000 * 60 * 5,
                timeOutBehavior: Realm.OpenRealmTimeOutBehavior.ThrowException
            }
        }
    });
    $REALM = result;
    if (EntityBase.localRealm == null && $REALM != null) {
        EntityBase.localRealm = $REALM;
    }
    if (window.schema == null) {
        window.schema = {};
        window.schema.string = { name: 'string', columns: primitives.string as MRT_ColumnDef<any>[] } as any;
        window.schema.int = { name: 'int', columns: primitives.int as MRT_ColumnDef<any>[] } as any;
        window.schema.double = { name: 'double', columns: primitives.double as MRT_ColumnDef<any>[] } as any;
        window.schema.bool = { name: 'bool', columns: primitives.string as MRT_ColumnDef<any>[] } as any;
        window.schema.date = { name: 'date', columns: primitives.date as MRT_ColumnDef<any>[] } as any;
    }
    result?.schema.forEach((item) => {
        if (item.ctor) {
            window.schema[item.name] = item.ctor as any;
        }
    });
    return result;
};

let lock = true;

localRealm()
    .then(() => {
        lock = false;
        while (lock) {
            sleep(1500);
        }
    })
    .finally(() => ignore()
    // console.log('FINALLY!')
    );

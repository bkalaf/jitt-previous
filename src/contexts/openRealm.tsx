import Realm from 'realm';
import { schema } from '../schema/schema';

export function openRealm(partitionValue: string) {
    return async function openRealmInner(user: Realm.User | null) {
        if (!user) return undefined;
        const realm = await Realm.open({
            schema: schema,
            sync: {
                partitionValue,
                user,
                newRealmFileBehavior: {
                    type: Realm.OpenRealmBehaviorType.DownloadBeforeOpen,
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
        return realm;
    };
}

import { useLocalRealm } from './useLocalRealm';


export function useTypes() {
    const realm = useLocalRealm();
    return realm.schema as RealmSchema;
}

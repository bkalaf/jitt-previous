import { $REALM } from '../$realm';
// import { useRealm } from './useRealm';

export function useLocalRealm() {
    // console.log('useLocalRealm');
    // const { realmResource } = useRealm();
    // const db = realmResource();
    const db = $REALM;
    if (db == null) throw new Error('no db');
    return db;
}

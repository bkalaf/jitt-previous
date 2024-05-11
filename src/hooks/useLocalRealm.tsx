import { useRealm } from './useRealm';

export function useLocalRealm() {
    console.log('useLocalRealm');
    const { realmResource } = useRealm();
    const db = realmResource();
    if (db == null) throw new Error('no db');
    return db;
}

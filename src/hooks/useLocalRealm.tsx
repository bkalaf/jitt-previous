import { useRealm } from './useRealm';

export function useLocalRealm() {
    const { db } = useRealm();
    if (db == null) throw new Error('no db');
    return db;
}

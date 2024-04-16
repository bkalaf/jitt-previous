import { useContxt } from '../contexts/useContxt';
import { RealmContext } from '../contexts/RealmContext';

export function useRealm() {
    return useContxt('RealmContext', RealmContext);
}

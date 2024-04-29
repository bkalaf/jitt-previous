import { useProvideRealmContext } from './useProvideRealmContext';
import { RealmContext } from './RealmContext';


export function RealmProvider({ children }: { children: Children; }) {
    const value = useProvideRealmContext();
    return <RealmContext.Provider value={value}>{children}</RealmContext.Provider>;
}

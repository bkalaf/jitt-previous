import { useCallback, useEffect, useRef } from 'react';
import { useLocalRealm } from './useLocalRealm';
import Realm from 'realm';

export function useTypes() {
    const realm = useLocalRealm();
    return realm.schema as (Realm.BaseObjectSchema & {
        properties: Realm.CanonicalPropertiesTypes<any>;
        ctor: MyClass<any>;
    })[];
}

export function useGetInitFor() {
    const types = useTypes();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ref = useRef<(s: string) => () => InitValue<any>>((s: string) => () => {
        throw new Error('ref for getinitfor not defined');
    });
    useEffect(() => {
        ref.current = function (s: string) {
            const schema = types.find((x) => x.name === s);
            if (schema == null) throw new Error(`could not find schema matching: ${s}`);
            const init = schema.ctor.init;
            return init(ref);
        };
    }, [types]);
}

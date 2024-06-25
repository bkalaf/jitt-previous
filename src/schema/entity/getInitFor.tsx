import Realm from 'realm';
import { isPrimitive } from '../conversion/cnvrt';
import { initialValue } from '../../initialValue';

export function getInitFor<T extends AnyObject>(Ctor: any, name: string): InitFunction<T> {
    if (isPrimitive(name)) return initialValue[name as keyof typeof initialValue] as InitFunction<any>;
    const {
        localRealm: { schema }
    } = Ctor as { localRealm: Realm };
    const $schema = schema as (Realm.BaseObjectSchema & {
        properties: Realm.CanonicalPropertiesTypes<any>;
        ctor: MyClass<T>;
    })[];
    const ctor = $schema.find((x) => x.name === name);
    if (ctor == null) throw new Error(`could not find schema for ${name}`);
    return ctor.ctor.init;
}

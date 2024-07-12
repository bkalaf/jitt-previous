import { useMemo } from 'react';
import { useLocalRealm } from './useLocalRealm';
import Realm from 'realm';
import { primitives } from './primtivies';
import { doubleQuote } from '../common/doubleQuote';
import { surround } from '../common/text/surround';
import { is } from '../common/is';
import { isUpper } from '../common/text/isUpper';

// eslint-disable-next-line @typescript-eslint/ban-types
export function stringifyFunction(obj: Function) {
    const name = obj.name;
    const text = obj.toString().replaceAll('"', '\\"').replaceAll('\n', ' ');
    return name != null && isUpper(name[0]) ? doubleQuote(name) ?? '' : doubleQuote([name, text].filter(is.not.nil).join(': ')) ?? '';
} 
export function stringify(obj: any): string {
    const type = typeof obj;
    switch (type) {
        case 'string':
            return doubleQuote(obj) ?? '';
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'symbol':
            return obj.toString();
        case 'undefined':
            return 'null';
        case 'object':
            if (obj == null) return 'null';
            if (obj instanceof RegExp) return doubleQuote(obj.toString()) ?? '';
            if (Array.isArray(obj)) {
                return surround('[', ']')(obj.map(stringify).join(', ')) ?? '';
            }
            return (
                surround(
                    '{',
                    '}',
                    false
                )(
                    Object.entries(obj)
                        .map(([k, v]) => [doubleQuote(k), stringify(v)].join(': '))
                        .join(', ')
                ) ?? ''
            );
        case 'function':
            // eslint-disable-next-line @typescript-eslint/ban-types
            return stringifyFunction(obj as Function)
    }
}
export function useTypes() {
    const realm = useLocalRealm();
    const types = useMemo(
        () =>
            [...Object.entries(primitives).map(([k, columns]) => ({ name: k, schema: { name: k }, ctor: { columns, schema: { name: k } } })), ...realm.schema] as (Realm.BaseObjectSchema & {
                properties: Realm.CanonicalPropertiesTypes<any>;
                ctor: MyClass<any>;
            })[],
        [realm.schema]
    );
    // const fn = [app.getPath('appData'), 'jitt', 'schema.json'].join('/');
    // useEffect(() => {
    //     console.log('columns', stringify(Object.fromEntries(realm.schema.map((x) => [x.name, (x.ctor as any)?.columns]))));
    //     // fs.writeFileSync(fn, JSON.stringify(realm.schema, null, '\t'));
    // }, []);
    return types;
}

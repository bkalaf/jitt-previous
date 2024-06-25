import Realm from 'realm';


export function toJSON(obj: any) {
    if (obj instanceof Realm.Object) return obj.toJSON();
    return JSON.parse(JSON.stringify(obj));
}

import Realm from 'realm';
export declare function useTypes(): (Realm.BaseObjectSchema & {
    properties: Realm.CanonicalPropertiesTypes<any>;
    ctor: MyClass<any>;
})[];

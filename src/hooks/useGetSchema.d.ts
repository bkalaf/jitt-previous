export declare function useGetSchema(objectType: string): (import("realm").BaseObjectSchema & {
    properties: import("realm").CanonicalPropertiesTypes<any>;
    ctor: MyClass<any>;
}) | undefined;

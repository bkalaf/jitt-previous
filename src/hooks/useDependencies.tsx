import { useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useDependencies(...args: any[]) {
    // const watchedValues = useWatch({
    //     name: (dependencies as IDependency<T, keyof T & string>[]).map((x) => x.property)
    // }) as unknown[];
    return useCallback(() => false, []);
    // return useCallback(() => {
    //     console.log(`useDependency`, dependencies);
    //     const funcs = dependencies.map(({ dependency, type }, index) => {
    //         const negater: typeof opposite = type === 'enable' ? opposite : (identity as typeof opposite);
    //         const predicate = handleDependency(dependency);
    //         console.log(`watchedValue`, watchedValues[index], predicate(watchedValues[index]), negater(predicate(watchedValues[index])));
    //         return negater(predicate(watchedValues[index]));
    //     });
    //     console.log(`isDisabled results`, funcs);
    //     return funcs.some((x) => x);
    // }, [dependencies, watchedValues]);
}

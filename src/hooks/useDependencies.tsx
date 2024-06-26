import { MRT_RowData } from 'material-react-table';
import { useCallback } from 'react';
import { useWatch } from 'react-hook-form-mui';
import { identity } from '../common/identity';
import { handleDependency } from './handleDependency';
import { opposite } from './opposite';

export function useDependencies<T extends MRT_RowData, TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
    const watchedValues = useWatch({
        name: (dependencies as IDependency<T, keyof T & string>[]).map((x) => x.property)
    }) as unknown[];
    return useCallback(() => {
        const funcs = dependencies.map(({ dependency, type }, index) => {
            const negater: typeof opposite = type === 'enable' ? opposite : (identity as typeof opposite);
            const predicate = handleDependency(dependency);
            return negater(predicate(watchedValues[index]));
        });
        console.log(`isDisabled results`, funcs);
        return funcs.some((x) => x);
    }, [dependencies, watchedValues]);
}

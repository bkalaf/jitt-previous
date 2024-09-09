import { useMemo } from 'react';
import graph from '../../assets/data/classifierPath.json';
import { getProperty } from '../../common/object/getProperty';

// type ValueOf<T> = T extends Record<string, infer R> ? R : never;
type GraphValue = {
    traitOptions: string[];
    selectOptions: string[];
    flagOptions: string[];
}
export function sortByString(a: string, b: string) {
    return a.localeCompare(b);
}
export function useMatchClassificationPath(path: string[]) {
    return useMemo(() => {
        const prop = path.length > 0 ? (getProperty(path.join('.'), graph) as GraphValue) : (graph as GraphValue);        
        return {
            traitOptions: prop.traitOptions.sort(sortByString),
            selectOptions: prop.selectOptions.sort(sortByString),
            flagOptions: prop.flagOptions.sort(sortByString)
        }
    }, [path]);
}

import { reduce } from './reduce';
import { fmap } from './fmap';
import { pipeR } from './pipeR';

export const ofList = function <T, U>(mapper: (x: T) => U, getter: SkuGetter<DBList<T>>, reducer: (x: U, Y: U) => U, initial: U, final: (x: U) => U | undefined) {
    return pipeR(getter, fmap(mapper), reduce(reducer, initial), final);
};

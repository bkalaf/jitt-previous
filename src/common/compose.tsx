import { composeR } from './composeR.1';


export function compose<T, U>(funcR: (x: T) => U) {
    return function <V>(funcL: (x: V) => T) {
        return composeR(funcL, funcR);
    };
}

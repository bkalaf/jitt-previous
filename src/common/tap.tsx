import { konst } from './konst';

export function tap<T extends any[], U>(func?: (...args: T) => U) {
    return (...args: T): U | undefined => (func ? func(...args) : konst(undefined));
}

import { identity } from './identity';
import { composeR } from './composeR.1';

export function pipeR<TFuncs extends AnyFunction[]>(...funcs: TFuncs) {
    return (...params: Parameters<TFuncs[0]>) => funcs.reduce((pv, cv) => composeR(pv, cv), identity)(...params) as ReturnType<Last<TFuncs>>;
}

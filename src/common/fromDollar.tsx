import { composeR } from './composeR.1';

export function ofDollar(dollar?: number) {
    if (dollar == null) return undefined;
    return ['$', dollar.toFixed(2)].join('');
}
export function fromDollar(getter: SkuGetter<number>) {
    return composeR(getter, ofDollar);
}

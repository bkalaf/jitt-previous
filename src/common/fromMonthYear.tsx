import { IMonthYear } from '../types';
import { composeR } from './composeR.1';


export function fromMonthYear(getter: SkuGetter<IMonthYear>) {
    return composeR(getter, (x?: IMonthYear) => {
        if (x == null) return undefined;
        return [x.month, x.year].join('/');
    });
}

import dayjs from 'dayjs';
import { composeR } from './composeR.1';


export function fromDate(getter: SkuGetter<Date>) {
    const format = (x?: Date) => {
        if (x == null) return undefined;
        return dayjs(x).format('MM/DD/YYYY');
    };
    return composeR(getter, format);
}

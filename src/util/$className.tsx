import { partitionBy } from '../common/array/partitionBy';
import { distinct } from '../common/array/distinct';

export function $className<T extends { className?: string; }>(props: T, flags: Record<string, boolean>, ...classes: string[]): T {
    const { className, ...rest } = props;
    const [trues, falses] = partitionBy<[string, boolean]>((x) => x[1], Object.entries(flags));
    const className1 = className?.split(' ') ?? [];
    const className2 = classes.map(x => x.split(' ')).reduce((pv, cv) => [...pv, ...cv], []);
    const uniques = distinct([...className2, ...className1, ...trues.map(x => x[0])]);
    const cn = uniques.filter(x => !falses.map(x => x[0]).includes(x)).join(' ');
    return { ...rest, className: cn.length > 0 ? cn : undefined } as T;
}

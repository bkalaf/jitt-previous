import { MRT_RowData } from 'material-react-table';
import { getProperty } from './object/getProperty';


export function getLookupFunction<T extends MRT_RowData>(ctor: MyClass<T>) {
    const [labelProperty, liComponent] = 'labelProperty' in ctor ? [ctor.labelProperty] : [undefined, (ctor as any).liComponent];
    // console.log(`getLookupFunction`, ctor, labelProperty, liComponent);
    return (value?: T) => value == null ? undefined
        : labelProperty != null ? (getProperty(labelProperty as string, value) as string)
            : (liComponent(value)({}) as string) ?? undefined;
}

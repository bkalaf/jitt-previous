import { IAttribute } from '../types';
import { $className } from '../util/$className';

export function AttributeRowCell(props: { data: IAttribute; className?: string }) {
    const { data, className } = $className(props, {}, 'flex w-full flex-col');
    return (
        <span className={className}>
            <span className='flex w-full justify-start text-sm'>{data.path}</span>
            <span className='flex w-full justify-start indent-1.5 text-sm'>{data.unset ? 'undefined' : data.value?.toString() ?? ''}</span>
        </span>
    );
}

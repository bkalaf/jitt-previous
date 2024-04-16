import { IAttribute } from '../types';
import { $className } from '../util/$className';


export function AttributeRowCell(props: { data: IAttribute; className?: string; }) {
    const { data, className } = $className(props, {}, 'flex w-full flex-col');
    return (
        <span className={className}>
            <span className='flex justify-start w-full text-sm'>{data.path}</span>
            <span className='flex text-sm justify-start w-full indent-1.5'>{data.unset ? 'undefined' : data.value?.toString() ?? ''}</span>
        </span>
    );
}

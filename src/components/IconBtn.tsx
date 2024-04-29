import { IconButton, IconButtonProps, Tooltip, Zoom } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { $className } from '../util/$className';
import { useWhyDidIUpdate } from '../hooks/useWhyDidIUpdate';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { useMemo } from 'react';

export function merge<T extends Record<string, any>>(rest: T, propName: string, value: any) {
   if (propName in rest) {
        const { [propName]: current, ...remaining } = rest;
        const merged = { ...current, ...value };
        return { ...remaining, [propName]: merged }
   }
   return rest;
}
export function IconBtn(props: { tooltip: string; icon: IconDefinition; disabled?: boolean; onClick?: MouseEv<HTMLButtonElement>; className?: string; color?: IconButtonProps['color']; text?: string; iconSize?: SizeProp; outerDim?: string; innerDim?: string } & Partial<IconButtonProps>) {
    useWhyDidIUpdate('IconBtn', props);
    const { icon, tooltip, disabled, onClick, className, color, text, iconSize, outerDim, innerDim, ...remain } = props;
    const { className: cn, ...rest } = $className({ className, ...remain }, {
        'text-inherit': className?.includes('text-') ?? false,
        'text-black': className?.includes('text-') ?? true
    }, 'hover:bg-yellow-500');
    const iconButtonSpread = useMemo(() => merge(rest, 'sx', outerDim == null ? {} : {
        height: outerDim,
        width: outerDim
    }), [outerDim, rest]);
    const faSpread = useMemo(() => merge({}, 'style', innerDim == null ? {} : { height: innerDim, width: innerDim }), [innerDim])
    return (
        <Tooltip title={tooltip} placement='bottom' TransitionComponent={Zoom}>
            <IconButton  color={color} size={iconSize === 'sm' ? 'small' : iconSize === 'lg' ? 'large' : 'medium'} disabled={disabled ?? false} onClick={onClick} className={cn} {...iconButtonSpread}>
                <FontAwesomeIcon  icon={icon} size={iconSize} className='block object-contain' {...faSpread}/> 
                {text == null ? null : <span className='block object-cover text-base font-bold'>{text}</span>}
            </IconButton>
        </Tooltip>
    );
}
// className={cn}
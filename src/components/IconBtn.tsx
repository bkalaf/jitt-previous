import { IconButton, IconButtonProps, Tooltip, Zoom } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { $className } from '../util/$className';
import { useWhyDidIUpdate } from '../hooks/useWhyDidIUpdate';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { iconButtonDim, iconSVGDim } from './Views/expandButtonHW';

export function merge<T extends Record<string, any>>(rest: T, propName: string, value: any) {
    if (propName in rest) {
        const { [propName]: current, ...remaining } = rest;
        const merged = { ...current, ...value };
        return { ...remaining, [propName]: merged };
    }
    return rest;
}
export function IconBtn(
    props: {
        classes?: Partial<Record<'iconButton' | 'fontAwesomeIcon', string>>;
        tooltip: string;
        icon: IconDefinition;
        disabled?: boolean;
        onClick?: MouseEv<HTMLButtonElement>;
        className?: string;
        color?: IconButtonProps['color'];
        text?: string;
        iconSize?: SizeProp;
        outerDim?: string;
        innerDim?: string;
    } & Partial<IconButtonProps>
) {
    useWhyDidIUpdate('IconBtn', props);
    const { icon, tooltip, disabled, onClick, className, color, text, iconSize, outerDim, innerDim, classes, ...remain } = { innerDim: iconSVGDim, outerDim: iconButtonDim, ...props };
    const { className: faClassName } = $className({ className: 'block object-cover' }, {}, classes?.fontAwesomeIcon ?? '');
    const { className: cn, ...rest } = $className(
        { className, ...remain },
        {
            'text-inherit': className?.includes('text-') ?? false,
            'text-black': className?.includes('text-') ?? true
        },
        'hover:bg-fuchsia-500 p-0 flex text-center mx-auto bg-slate-500 rounded-lg',
        classes?.iconButton ?? ''
    );
   
    return (
        <Tooltip title={tooltip} placement='bottom' TransitionComponent={Zoom}>
            <IconButton
                color={color}
                size={iconSize === 'sm' ? 'small' : iconSize === 'lg' ? 'large' : 'medium'}
                disabled={disabled ?? false}
                onClick={onClick}
                className={cn}
                sx={{
                    height: outerDim,
                    width: outerDim
                }}
                {...rest}
            >
                <FontAwesomeIcon
                    icon={icon}
                    size={iconSize}
                    className={faClassName}
                    style={{
                        height: innerDim,
                        width: innerDim
                    }}
                />
                {text == null ? null : <span className='block object-cover text-base font-bold'>{text}</span>}
            </IconButton>
        </Tooltip>
    );
}
// className={cn}

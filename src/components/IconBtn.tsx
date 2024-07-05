import { IconButton, IconButtonProps, Tooltip, Zoom } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { $className } from '../util/$className';
import { useWhyDidIUpdate } from '../hooks/useWhyDidIUpdate';
import { useMemo } from 'react';

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
    const { icon, tooltip, disabled, onClick, className, color, text, iconSize, outerDim, innerDim, classes, ...remain } = props;
    const { className: faClassName } = useMemo(() => $className({ className: 'block object-cover' }, {}, classes?.fontAwesomeIcon ?? ''), [classes?.fontAwesomeIcon]);
    const { className: cn, ...rest } = useMemo(
        () =>
            $className(
                { className, ...remain },
                {
                    'text-inherit': className?.includes('text-') ?? false,
                    'text-black': className?.includes('text-') ?? true
                },
                'hover:bg-fuchsia-500 p-0 flex text-center mx-auto bg-slate-500 rounded-lg',
                classes?.iconButton ?? ''
            ),
        [className, classes?.iconButton, remain]
    );
    const sx = useMemo(
        () => ({
            height: outerDim,
            width: outerDim
        }),
        [outerDim]
    );
    const style = useMemo(
        () => ({
            height: innerDim,
            width: innerDim
        }),
        [innerDim]
    );
    return (
        <Tooltip title={tooltip} placement='bottom' TransitionComponent={Zoom}>
            {useMemo(
                () => (
                    <IconButton
                        color={color}
                        size={
                            iconSize === 'sm' ? 'small'
                            : iconSize === 'lg' ?
                                'large'
                            :   'medium'
                        }
                        disabled={disabled ?? false}
                        onClick={onClick}
                        className={cn}
                        sx={sx}
                        {...rest}>
                        <FontAwesomeIcon icon={icon} size={iconSize} className={faClassName} style={style} />
                        {text == null ? null : <span className='block object-cover text-base font-bold'>{text}</span>}
                    </IconButton>
                ),
                [cn, color, disabled, faClassName, icon, iconSize, onClick, rest, style, sx, text]
            )}
        </Tooltip>
    );
}
// className={cn}

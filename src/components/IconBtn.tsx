import { IconButton, Tooltip, Zoom } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { $className } from '../util/$className';
import { useWhyDidIUpdate } from '../hooks/useWhyDidIUpdate';

export function IconBtn(props: { tooltip: string; icon: IconDefinition; disabled?: boolean; onClick?: () => void; className?: string }) {
    useWhyDidIUpdate('IconBtn', props);
    const { icon, tooltip, disabled, onClick, className } = props;
    const { className: cn } = $className({ className }, {}, 'hover:bg-yellow-500');
    return (
        <Tooltip title={tooltip} placement='bottom' TransitionComponent={Zoom}>
            <IconButton size='large' disabled={disabled ?? false} onClick={onClick} className={cn}>
                <FontAwesomeIcon className='text-black' icon={icon} />
            </IconButton>
        </Tooltip>
    );
}

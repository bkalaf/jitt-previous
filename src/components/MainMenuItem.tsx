import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import { useCallback } from 'react';
import { camelToProper } from '../common/text';

export function MainMenuItem({ segment }: { segment: string }) {
    const navigate = useNavigate();
    const onClick = useCallback(() => navigate(['/data/v1/', segment].join('')), [navigate, segment]);
    return (
        <MenuItem className='text-white bg-black border border-white' onClick={onClick}>
            {camelToProper(segment)}
        </MenuItem>
    );
}

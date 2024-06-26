import { MenuItem } from '@mui/material';

export function BaseMenuItem(props: { label: string; onClick: () => void; disabled?: boolean }) {
    const { label, onClick, disabled } = props;
    return (
        <MenuItem disabled={disabled ?? false} className='border border-white bg-black text-white' onClick={onClick}>
            {label}
        </MenuItem>
    );
}

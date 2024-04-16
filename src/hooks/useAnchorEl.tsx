import { useCallback, useMemo, useState } from 'react';

export function useAnchorEl(): [
    anchorEl: HTMLElement | null,
    open: boolean,
    onClick: (ev: React.MouseEvent<HTMLElement>) => void,
    onClose: () => void
] {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = useMemo(() => Boolean(anchorEl), [anchorEl]);
    const onClick = useCallback((ev: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(ev.currentTarget as HTMLElement | null);
    }, [])
    const onClose = useCallback(() => setAnchorEl(null), []);
    return [anchorEl, open, onClick, onClose];
}
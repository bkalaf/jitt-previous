import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { BaseMenuItem } from './BaseMenuItem';
import { camelToProper } from '../common/text/camelToProper';

export function MainMenuItem({ segment, baseUrl }: { segment: string; baseUrl: string }) {
    const navigate = useNavigate();
    const onClick = useCallback(() => navigate([baseUrl, segment].join('')), [baseUrl, navigate, segment]);
    return <BaseMenuItem label={camelToProper(segment)} onClick={onClick} />;
}

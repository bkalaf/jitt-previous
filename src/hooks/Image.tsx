import { useWhyDidIUpdate } from './useWhyDidIUpdate';
import { useEffect, useMemo, useState } from 'react';
import { is } from '../common/is';
import * as fs from 'graceful-fs';

export function Image(props: { filepath: string; caption?: string; selected?: boolean }) {
    useWhyDidIUpdate('Image', props);
    const { filepath, caption, selected } = props;
    const [src, setSrc] = useState<string | undefined>(undefined);
    const blob = useMemo(() => (fs.existsSync(filepath) ? new Blob([new Uint8Array(fs.readFileSync(filepath).buffer)]) : undefined), [filepath]);
    useEffect(() => {
        const func = () => {
            if (blob == null) return;
            const local = URL.createObjectURL(blob);
            console.log(`local: ${local}`);
            setSrc(local);
            return () => {
                if (local != null) {
                    URL.revokeObjectURL(local);
                    console.log(`revoke: ${local}`);
                }
            };
        };
        func();
    }, [blob]);
    return is.not.nil(filepath) ? <img src={src} alt={caption} className='flex object-scale-down aria-selected:ring-4 aria-selected:ring-red-500' width={250} aria-selected={selected ?? false} /> : null;
}

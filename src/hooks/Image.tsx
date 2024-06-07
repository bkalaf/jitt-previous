import { useWhyDidIUpdate } from './useWhyDidIUpdate';
import { useEffect, useState } from 'react';
import { is } from '../common/is';
import * as fs from 'graceful-fs';

export function Image(props: { filepath: string; caption?: string, selected?: boolean }) {
    useWhyDidIUpdate('Image', props);
    const { filepath, caption, selected } = props;
    const [src, setSrc] = useState<string>('');
    useEffect(() => {
        if (src == null && is.not.nil(filepath)) {
            const buffer = fs.readFileSync(filepath).buffer;
            const blob = new Blob([new Uint8Array(buffer)]);
            const local = URL.createObjectURL(blob);
            setSrc(local);
            return () => {
                if (local != null) URL.revokeObjectURL(local);
            };
        } else {
            return () => {
                URL.revokeObjectURL(src);
            };
        }
    }, [filepath, src]);
    return is.not.nil(filepath) ? <img src={src} alt={caption} className='aria-selected:ring-2 aria-selected:ring-red-500' aria-selected={selected ?? false} /> : null;
}

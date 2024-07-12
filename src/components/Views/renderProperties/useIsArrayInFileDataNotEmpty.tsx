import { useCallback } from 'react';
import * as fs from 'graceful-fs';

export function useIsArrayInFileDataNotEmpty(fn: string) {
    return useCallback(() => {
        return (fs.existsSync(fn) ? (JSON.parse(fs.readFileSync(fn).toString()) as any[]).length : 0) !== 0;
    }, [fn]);
}

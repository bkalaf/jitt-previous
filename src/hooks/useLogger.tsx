import { process } from '@electron/remote';
import { useCallback } from 'react';


export function useLogger() {
    const log = useCallback((...args: string[]) => {
        console.log(...args);
        process.stdout.write(args.join(',').concat('\n'));
    }, []);
    return log;
}

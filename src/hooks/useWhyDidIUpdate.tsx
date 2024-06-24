import { process } from '@electron/remote';
import { useCallback, useEffect, useRef } from 'react';

export function useLogger() {
    const log = useCallback((...args: string[]) => {
        console.log(...args);
        process.stdout.write(args.join(','))
    }, [])
    return log;
}

export function useWhyDidIUpdate(name: string, props: Record<string, any>) {
    // Get a mutable ref object where we can store props ...
    // ... for comparison next time this hook runs.
    const previousProps = useRef<Record<string, any>>({});
    useEffect(() => {
        if (previousProps.current) {
            // Get all keys from previous and current props
            const allKeys = Object.keys({ ...previousProps.current, ...props });
            // Use this object to keep track of changed props
            const changesObj: Record<string, any> = {};
            allKeys.forEach((key) => {
                // If previous is different from current
                if (previousProps.current[key] !== props[key]) {
                    // Add to changesObj
                    changesObj[key] = {
                        from: previousProps.current[key],
                        to: props[key]
                    };
                }
            });
            if (Object.keys(changesObj).length) {
                // eslint-disable-next-line no-console
                // process.stdout.write(name);
                // process.stdout.write(JSON.stringify(changesObj, null, '\t'));
                // console.log('[why-did-you-update]', name, changesObj)
            }
        }
        previousProps.current = props;
    });
}

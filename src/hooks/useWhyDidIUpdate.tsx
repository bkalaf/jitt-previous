// import { process } from '@electron/remote';
import { useEffect, useRef } from 'react';

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
            if (Object.keys(changesObj).length > 0) {
                // try {
                //     process.stdout.write(name.concat('\n'));
                //     process.stdout.write(JSON.stringify(changesObj, null, '\t').concat('\n'));
                //     // console.log('[why-did-you-update]', name, changesObj)
                // } catch (error) {
                //     console.error(error);
                // }
            }
        }
        previousProps.current = props;
    });
}

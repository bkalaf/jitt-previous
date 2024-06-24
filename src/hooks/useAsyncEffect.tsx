import { useEffect } from 'react';
import { ignore } from '../common/ignore';

export default function useAsyncEffect<Data = any>(callback: (isMounted: () => boolean) => Data | Promise<Data>, onDestroyOrDependencies: null | ((result?: Data) => void) | any[] = [], dependencies: any[] = []) {
    let deps: any[];
    let destroy: (result?: Data) => void = ignore;

    if (typeof onDestroyOrDependencies === 'function') {
        destroy = onDestroyOrDependencies;
        deps = dependencies;
    } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deps = onDestroyOrDependencies || [];
    }

    useEffect(() => {
        let result: Data;
        let mounted = true;

        const maybePromise = callback(() => {
            return mounted;
        });

        Promise.resolve(maybePromise).then((value) => {
            result = value;
        });

        return () => {
            mounted = false;

            if (typeof destroy === 'function') {
                destroy(result);
            }
        };
    }, [callback, destroy]);
}


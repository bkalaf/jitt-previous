import useAsyncEffect from './useAsyncEffect';


export function useMountUnmount(mount: () => Promise<void>, unmount: () => void, deps: any[]) {
    return useAsyncEffect(mount, unmount, deps);
}

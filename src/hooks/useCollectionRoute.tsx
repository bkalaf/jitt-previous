import { useCollectionName } from './useCollectionName';

export function useCollectionRoute() {
    const route = useCollectionName();
    if (route == null) throw new Error('no collection route');
    return route;
}

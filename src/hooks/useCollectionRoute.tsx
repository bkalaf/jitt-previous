import { useMatch } from 'react-router';

export function useCollectionName() {
    const match = useMatch('/data/v1/:collection');
    return match?.params.collection;
}
export function useCollectionRoute() {
    const route = useCollectionName();
    if (route == null) throw new Error('no collection route');
    return route;
}

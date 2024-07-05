import { useMatch } from 'react-router';

export function useCollectionName() {
    const match = useMatch('/data/v1/:collection');
    // console.log(`match`, match);
    const result = match?.params.collection?.split('/')[0];
    // console.log(`collectionRoute`, result);
    return result;
}

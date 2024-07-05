// import React, { useMemo } from 'react';
// import { useConfiguration } from './useConfiguration';

// export function useCollectionSetting<TKey extends keyof IConfig>(collection: CollectionNames, key: TKey): [IConfig[TKey], React.Dispatch<React.SetStateAction<IConfig[TKey]>>] {
//     const { getCollectionSetting, setCollectionSetting } = useConfiguration();
//     // const value = useMemo(() => getCollectionSetting<TKey, IConfig[TKey]>(collection, key)(), [collection, getCollectionSetting, key]);
//     const setter = useMemo(() => setCollectionSetting<TKey, IConfig[TKey]>(collection, key), [collection, key, setCollectionSetting]);
//     return setter
// }

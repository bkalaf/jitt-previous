import localforage from 'localforage';

export const $storage = localforage.createInstance({
    name: 'JITT-CollectionOptions',
    storeName: 'JITT-CollectionOptions',
    version: 2,
    driver: localforage.LOCALSTORAGE
});

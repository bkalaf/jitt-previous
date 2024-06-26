import { createContext } from 'react';

export type IConfigurationContext = {
    configPath: string;
    configuration: IConfiguration;
    getSection: <TKey extends keyof IConfiguration, TValue>(name: TKey) => () => TValue;
    updateConfig: <TKey extends keyof IConfiguration, TValue>(name: TKey, value: ((x: TValue) => TValue) | TValue) => void;
    setCollectionSetting: <TKey extends keyof IConfig, TValue>(collection: CollectionNames, name: TKey) => (value: ((x: TValue) => TValue) | TValue) => void;
    getCollectionSetting: <TKey extends keyof IConfig, TValue>(collection: CollectionNames, name: TKey) => () => TValue;
    getCollectionSection: (collection: CollectionNames) => () => IConfig;
};

export const ConfigurationContext = createContext<IConfigurationContext | undefined>(undefined);

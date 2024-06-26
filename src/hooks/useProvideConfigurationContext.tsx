import { useCallback, useEffect, useMemo, useState } from 'react';
import * as fs from 'graceful-fs';
import { app } from '@electron/remote';
import { getProperty, setProperty } from '../common/object';
import { deepEqual } from './deepEqual';
import { IConfigurationContext } from '../contexts/Configuration';
import { is } from '../common/is';
import { defaultState } from './defaultState';

export function useProvideConfigurationContext(): IConfigurationContext {
    const appDataPath = useMemo(() => app.getPath('appData'), []);
    const configPath = [appDataPath, 'jitt', 'config.json'].join('\\');
    console.log(`configPath`, configPath);
    const fileOps = useMemo(
        () => ({
            read: () => {
                if (!fs.existsSync(configPath)) {
                    fs.writeFileSync(configPath, JSON.stringify({}, null, '\t'));
                }
                const data = fs.readFileSync(configPath)?.toString() ?? '{}';
                const readData = JSON.parse(data.length === 0 ? '{}' : data) as IConfiguration;
                return readData;
            },
            write: (data: IConfiguration) => {
                fs.writeFileSync(configPath, JSON.stringify(data, null, '\t'));
            }
        }),
        [configPath]
    );
    const [configuration, setConfiguration] = useState(fileOps.read());
    useEffect(() => {
        fileOps.write(configuration);
    }, [configuration, fileOps]);
    const updateConfig = useCallback(<TKey extends keyof IConfiguration, TValue>(name: TKey, value: ((x: TValue) => TValue) | TValue) => {
        setConfiguration((old) => {
            const current = getProperty(name, old) as TValue;
            const upcoming = is.function(value) ? value(current) : value;
            const next = setProperty(name, old, upcoming);
            console.log(`setConfiguration`, current, upcoming, next, old);
            if (deepEqual(next, old)) {
                return old;
            }
            return next;
        });
    }, []);
    const checkCollection = useCallback(
        (collection: CollectionNames) => {
            const fullname = ['collections', collection].join('.');
            if (!Object.hasOwn(configuration.collections, collection)) {
                updateConfig(fullname as any, defaultState);
            }
        },
        [configuration.collections, updateConfig]
    );
    const setCollectionSetting = useCallback(
        <TKey extends keyof IConfig, TValue>(collection: CollectionNames, name: TKey) => {
            return (value: ((x: TValue) => TValue) | TValue) => {
                checkCollection(collection);
                const fullname = ['collections', collection, name].join('.');
                updateConfig(fullname as any, value);
            };
        },
        [checkCollection, updateConfig]
    );
    const getSection = useCallback(
        <TKey extends keyof IConfiguration, TValue>(name: TKey) => {
            return () => getProperty(name, configuration) as TValue;
        },
        [configuration]
    );
    const getCollectionSetting = useCallback(
        <TKey extends keyof IConfig, TValue>(collection: CollectionNames, name: TKey) => {
            return () => {
                checkCollection(collection);
                const fullname = ['collections', collection, name].join('.');
                return (getProperty(fullname as any, configuration) as TValue) ?? (defaultState[name] as TValue);
            };
        },
        [checkCollection, configuration]
    );
    const getCollectionSection = useCallback(
        (collection: CollectionNames) => {
            return () => getSection<'collections', Record<CollectionNames, IConfig>>('collections')()[collection];
        },
        [getSection]
    );
    return useMemo(
        () => ({
            configPath,
            getSection,
            configuration,
            updateConfig,
            getCollectionSection,
            setCollectionSetting,
            getCollectionSetting
        }),
        [configPath, configuration, getCollectionSection, getCollectionSetting, getSection, setCollectionSetting, updateConfig]
    );
}

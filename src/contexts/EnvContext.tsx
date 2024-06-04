import { createContext, useMemo } from 'react';

export type IEnvContext = {
    MERCARI_USER: string;
    MERCARI_PASSWORD: string;
    REALM_APP_ID: string;
    REALM_USER: string;
    REALM_PASSWORD: string;
    LOG_LEVEL: ConsoleLoggingLevel;
    AMQP: string;
    DOWNLOADS_FOLDER: string;
    BARCODE_PRINT_FILE: string;
    FILESYSTEM_ROOT: string;
    FILESYSTEM_PRODUCTS: string;
    VIDEOS_FOLDER: string;
    PRODUCT_DOCS_FOLDER: string;
    IMAGES_FOLDER: string;
    INBOUND_FILES_FOLDER: string;
    REMOVE_BG_SUFFIX: string;
    REMOVE_BG_EXT: string;
};

export const EnvContext = createContext<undefined | IEnvContext>(undefined);

const MERCARI_USER = process.env.MERCARI_USER ?? '';
const MERCARI_PASSWORD = process.env.MERCARI_PASSWORD ?? '';
const REALM_APP_ID = process.env.REALM_APP_ID ?? '';
const REALM_USER = process.env.REALM_USER ?? '';
const REALM_PASSWORD = process.env.REALM_PASSWORD ?? '';
const AMQP = process.env.AMQP ?? '';    
const DOWNLOADS_FOLDER = process.env.DOWNLOADS_FOLDER ?? '';
const BARCODE_PRINT_FILE = process.env.BARCODE_PRINT_FILE ?? '';
const FILESYSTEM_ROOT = process.env.FILESYSTEM_ROOT ?? '';
const FILESYSTEM_PRODUCTS = process.env.FILESYSTEM_PRODUCTS ?? ''; 
const IMAGES_FOLDER = process.env.IMAGES_FOLDER ?? '';
const VIDEOS_FOLDER = process.env.VIDEOS_FOLDER ?? '';
const PRODUCT_DOCS_FOLDER = process.env.PRODUCT_DOCS_FOLDER ?? '';
const INBOUND_FILES_FOLDER = process.env.INBOUND_FILES_FOLDER ?? '';
const REMOVE_BG_SUFFIX = process.env.REMOVE_BG_SUFFIX ?? '';
const REMOVE_BG_EXT = process.env.REMOVE_BG_EXT ?? '';
const LOG_LEVEL = (process.env.LOG_LEVEL ?? 'log') as ConsoleLoggingLevel;

export function useProvideEnvContext(): IEnvContext {
    return useMemo(
        () => ({
            MERCARI_PASSWORD,
            MERCARI_USER,
            REALM_APP_ID,
            REALM_USER,
            REALM_PASSWORD,
            LOG_LEVEL,
            AMQP,
            DOWNLOADS_FOLDER,
            BARCODE_PRINT_FILE,
            FILESYSTEM_ROOT,
            FILESYSTEM_PRODUCTS,
            IMAGES_FOLDER,
            VIDEOS_FOLDER,
            PRODUCT_DOCS_FOLDER,
            INBOUND_FILES_FOLDER,
            REMOVE_BG_SUFFIX,
            REMOVE_BG_EXT
        }),
        []
    );
}

export function EnvProvider({ children }: { children: Children }) {
    const context = useProvideEnvContext();
    return <EnvContext.Provider value={context}>{children}</EnvContext.Provider>;
}

import { useMemo } from 'react';
import { IEnvContext } from '../contexts/EnvContext';

const AMQP = process.env.AMQP ?? '';
const BARCODE_PRINT_FILE = process.env.BARCODE_PRINT_FILE ?? '';
const DOWNLOADS_FOLDER = process.env.DOWNLOADS_FOLDER ?? '';
const DROPBOX_PATH = process.env.DROPBOX_PATH ?? '';
const DROPBOX_PWD = process.env.DROPBOX_PWD ?? '';
const DROPBOX_USER = process.env.DROPBOX_USER ?? '';
const FILESYSTEM_PRODUCTS = process.env.FILESYSTEM_PRODUCTS ?? '';
const FILESYSTEM_ROOT = process.env.FILESYSTEM_ROOT ?? '';
const IMAGES_FOLDER = process.env.IMAGES_FOLDER ?? '';
const INBOUND_FILES_FOLDER = process.env.INBOUND_FILES_FOLDER ?? '';
const LOG_LEVEL = (process.env.LOG_LEVEL ?? 'log') as ConsoleLoggingLevel;
const MERCARI_PASSWORD = process.env.MERCARI_PASSWORD ?? '';
const MERCARI_USER = process.env.MERCARI_USER ?? '';
const PRODUCT_DOCS_FOLDER = process.env.PRODUCT_DOCS_FOLDER ?? '';
const REALM_APP_ID = process.env.REALM_APP_ID ?? '';
const REALM_PASSWORD = process.env.REALM_PASSWORD ?? '';
const REALM_USER = process.env.REALM_USER ?? '';
const REMOVE_BG_EXT = process.env.REMOVE_BG_EXT ?? '';
const REMOVE_BG_SUFFIX = process.env.REMOVE_BG_SUFFIX ?? '';
const VIDEOS_FOLDER = process.env.VIDEOS_FOLDER ?? '';
const COLLECTION_OPTIONS_CONFIG_FILE = process.env.COLLECTION_OPTIONS_CONFIG_FILE ?? '';
const MONGODB_ADMIN_PASSWORD = process.env.MONGODB_ADMIN_PASSWORD ?? '';
const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME ?? '';
const PRODUCT_SEARCH_OID_LIST = process.env.PRODUCT_SEARCH_OID_LIST ?? '';

export function useProvideEnvContext(): IEnvContext {
    return useMemo(
        () => ({
            AMQP,
            BARCODE_PRINT_FILE,
            DOWNLOADS_FOLDER,
            DROPBOX_PATH,
            DROPBOX_PWD,
            DROPBOX_USER,
            FILESYSTEM_PRODUCTS,
            FILESYSTEM_ROOT,
            IMAGES_FOLDER,
            INBOUND_FILES_FOLDER,
            LOG_LEVEL,
            MERCARI_PASSWORD,
            MERCARI_USER,
            PRODUCT_DOCS_FOLDER,
            REALM_APP_ID,
            REALM_PASSWORD,
            REALM_USER,
            REMOVE_BG_EXT,
            REMOVE_BG_SUFFIX,
            VIDEOS_FOLDER,
            COLLECTION_OPTIONS_CONFIG_FILE,
            MONGODB_ADMIN_PASSWORD
        }),
        []
    );
}

import { createContext } from 'react';

export type IEnvContext = {
    AMQP: string;
    BARCODE_PRINT_FILE: string;
    DOWNLOADS_FOLDER: string;
    DROPBOX_PATH: string;
    DROPBOX_PWD: string;
    DROPBOX_USER: string;
    FILESYSTEM_PRODUCTS: string;
    FILESYSTEM_ROOT: string;
    IMAGES_FOLDER: string;
    INBOUND_FILES_FOLDER: string;
    LOG_LEVEL: ConsoleLoggingLevel;
    MERCARI_PASSWORD: string;
    MERCARI_USER: string;
    PRODUCT_DOCS_FOLDER: string;
    REALM_APP_ID: string;
    REALM_PASSWORD: string;
    REALM_USER: string;
    REMOVE_BG_EXT: string;
    REMOVE_BG_SUFFIX: string;
    VIDEOS_FOLDER: string;
};

export const EnvContext = createContext<undefined | IEnvContext>(undefined);

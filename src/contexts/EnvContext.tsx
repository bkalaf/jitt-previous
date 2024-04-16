import { createContext, useMemo } from 'react';

export type IEnvContext = {
    MERCARI_USER: string;
    MERCARI_PASSWORD: string;
    REALM_APP_ID: string;
    REALM_USER: string;
    REALM_PASSWORD: string;
};

export const EnvContext = createContext<undefined | IEnvContext>(undefined);

const MERCARI_USER = process.env.MERCARI_USER ?? '';
const MERCARI_PASSWORD = process.env.MERCARI_PASSWORD ?? '';
const REALM_APP_ID = process.env.REALM_APP_ID ?? '';
const REALM_USER = process.env.REALM_USER ?? '';
const REALM_PASSWORD = process.env.REALM_PASSWORD ?? '';

export function useProvideEnvContext(): IEnvContext {
    return useMemo(
        () => ({
            MERCARI_PASSWORD,
            MERCARI_USER,
            REALM_APP_ID,
            REALM_USER,
            REALM_PASSWORD
        }),
        []
    );
}

export function EnvProvider({ children }: { children: Children }) {
    const context = useProvideEnvContext();
    return <EnvContext.Provider value={context}>{children}</EnvContext.Provider>;
}

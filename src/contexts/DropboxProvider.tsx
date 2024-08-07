import { useProvideDropboxContext, DropboxContext } from './DropboxContext';


export function DropboxProvider({ children }: { children: Children; }) {
    const value = useProvideDropboxContext();
    return <DropboxContext.Provider value={value}>
        {children}
    </DropboxContext.Provider>;
}

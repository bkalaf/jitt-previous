import { useProvideFileSystemContext } from '../hooks/useProvideFileSystemContext';
import { FileSystemContext } from './FileSystemContext';


export function FileSystemContextProvider({ children }: { children?: Children; }) {
    const value = useProvideFileSystemContext();
    return <FileSystemContext.Provider value={value}>{children}</FileSystemContext.Provider>;
}

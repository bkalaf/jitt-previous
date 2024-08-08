import { useContxt } from './useContxt';
import { DropboxContext } from '../contexts/DropboxContext';

export function useDropbox() {
    return useContxt('DropboxContext', DropboxContext);
}

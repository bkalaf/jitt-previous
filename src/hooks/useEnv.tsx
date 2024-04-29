import { useContxt } from './useContxt';
import { EnvContext } from '../contexts/EnvContext';

export function useEnv() {
    return useContxt('EnvContext', EnvContext);
}

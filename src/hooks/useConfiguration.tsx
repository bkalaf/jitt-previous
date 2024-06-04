import { ConfigurationContext } from '../contexts/Configuration';
import { useContxt } from './useContxt';


export function useConfiguration() {
    return useContxt('ConfigurationContext', ConfigurationContext);
}

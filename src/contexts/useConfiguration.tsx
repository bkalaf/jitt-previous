import { ConfigurationContext } from './Configuration';
import { useContxt } from '../hooks/useContxt';


export function useConfiguration() {
    return useContxt('ConfigurationContext', ConfigurationContext);
}

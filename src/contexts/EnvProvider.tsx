import { EnvContext } from './EnvContext';
import { useProvideEnvContext } from '../hooks/useProvideEnvContext';


export function EnvProvider({ children }: { children: Children; }) {
    const context = useProvideEnvContext();
    return <EnvContext.Provider value={context}>{children}</EnvContext.Provider>;
}

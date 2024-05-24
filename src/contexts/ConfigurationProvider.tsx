import { useProvideConfigurationContext } from './useProvideConfigurationContext';
import { ConfigurationContext } from './Configuration';


export function ConfigurationProvider(props: { children: Children; }) {
    const { children } = props;
    const value = useProvideConfigurationContext();
    return <ConfigurationContext.Provider value={value}>{children}</ConfigurationContext.Provider>;
}

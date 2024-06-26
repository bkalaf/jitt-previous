import { useProvideForagerContext, ForagerContext } from './ForagerContext';

export function ForagerProvider({ children }: { children: Children }) {
    const value = useProvideForagerContext();
    return <ForagerContext.Provider value={value}>{children}</ForagerContext.Provider>;
}

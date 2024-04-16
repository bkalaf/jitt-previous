import { useContext } from 'react';

export function useContxt<T>(name: string, context: React.Context<T>) {
    const value = useContext(context);
    if (value == null) throw new Error(`NO CONTEXT FOR: ${name}`);
    return value;
}

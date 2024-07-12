import { useCallback } from 'react';

// Run API Search

export function useFormEvents() {
    return useCallback((ev: React.FormEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
    }, []);
}

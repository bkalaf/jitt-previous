import { useCallback, useState } from 'react';


export function useToggler(initial = false): [
    state: boolean,
    onToggle: () => void,
    enable: () => void,
    disable: () => void
] {
    const [state, setState] = useState(initial);
    const enable = useCallback(() => setState(true), []);
    const disable = useCallback(() => setState(false), []);
    const onToggle = useCallback(() => setState(v => !v), []);
    return [state, onToggle, enable, disable];
}

import { useCallback } from 'react';


export function useElementEventHandler<TEvent extends Event, TElement extends HTMLElement, TSyntheticEvent extends React.SyntheticEvent<TElement, TEvent> = React.SyntheticEvent<TElement, TEvent>, TArgs extends any[] = never[]>(
    handler: (...args: TArgs) => (ev: TSyntheticEvent) => void,
    prevent = false,
    stop = false
) {
    return useCallback(
        (...args: TArgs) => {
            return (ev: TSyntheticEvent) => {
                if (prevent) ev.preventDefault();
                if (stop) ev.stopPropagation();
                handler(...args)(ev);
            };
        },
        [handler, prevent, stop]
    );
}

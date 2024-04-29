import React, { useCallback } from 'react';

export function useStopAndPrevent<TElement extends HTMLElement, TEvent extends Event, TSynthentic extends React.SyntheticEvent<TElement, TEvent>>(func: (ev: TSynthentic) => void) {
    return useCallback(
        (ev: TSynthentic) => {
            console.warn('event stopped and prevented', ev);
            ev.stopPropagation();
            ev.preventDefault();
            func(ev);
        },
        [func]
    );
}

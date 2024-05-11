import React, { useEffect, useRef } from 'react';
import { on } from './Router';


export function useClickAway<T extends HTMLElement>(isOpen: boolean, listener: (ev: React.MouseEvent<T>) => void): [
    ref: React.MutableRefObject<T | null>
] {
    const ref = useRef<T | null>();
    useEffect(() => {
        const func = (ev: React.MouseEvent<T>) => {
            console.log(`ref.current.tagName`, ref.current.tagName);
            console.log(`ref.current.innerText`, ref.current.innerText);
            console.log(`ev.currentTarget.tagName`, (ev.target as HTMLElement)?.tagName);
            console.log(`ev.currentTarget.innerText`, (ev.target as HTMLElement)?.innerText);
            console.log(`ev`, ev);
            console.log(`contains`, ref.current.contains(ev.target as HTMLElement));
            ev.preventDefault();
            ev.stopPropagation();
            const isFinal = (ev.target as HTMLElement).tagName === 'LI' && (ev.target as HTMLElement).innerText != null;
            if (isOpen && !ref.current.contains(ev.target as HTMLElement)) {
                if ((ev.target as HTMLElement).innerText !== null && (ref.current.innerText !== (ev.target as HTMLElement)?.innerText)) {
                    return;
                }
                listener(ev);
            }
        };

        return on(document, 'click', func);
    }, [isOpen, listener]);
    return [ref];
}

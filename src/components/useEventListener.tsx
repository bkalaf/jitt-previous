import { useEffect } from 'react';
import { ISource } from './App';


export function useEventListener<TEventMap, TEventName extends keyof TEventMap = keyof TEventMap, TEvent extends Event = Event, TSource extends ISource<TEventMap, TEventName, TEvent> = ISource<TEventMap, TEventName, TEvent>>(
    source: TSource,
    eventName: TEventName,
    listener: (ev: TEvent) => void
) {
    useEffect(() => {
        source.addEventListener(eventName, listener);
        return () => source.removeEventListener(eventName, listener);
    }, [eventName, listener, source]);
}

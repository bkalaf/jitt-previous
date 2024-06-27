import './../schema';
export declare function BreadcrumbItem({ path, name }: {
    path: string;
    name: string;
}): import("react/jsx-runtime").JSX.Element;
export type ISource<TEventMap, TEventName extends keyof TEventMap = keyof TEventMap, TEvent extends Event = Event> = {
    addEventListener(eventName: TEventName, listener: (ev: TEvent) => void): void;
    removeEventListener(eventName: TEventName, listener: (ev: TEvent) => void): void;
};
export declare function useEventListener<TEventMap, TEventName extends keyof TEventMap = keyof TEventMap, TEvent extends Event = Event, TSource extends ISource<TEventMap, TEventName, TEvent> = ISource<TEventMap, TEventName, TEvent>>(source: TSource, eventName: TEventName, listener: (ev: TEvent) => void): void;
export declare function App(): import("react/jsx-runtime").JSX.Element;

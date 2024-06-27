import React from 'react';
export declare function on(source: {
    addEventListener: (typeof document)['addEventListener'];
    removeEventListener: (typeof document)['removeEventListener'];
}, event: string, listener: (event: any) => void): () => void;
export declare const appRouter: (ProviderComponent: React.FunctionComponent<{
    children: Children;
}>) => import("@remix-run/router").Router;

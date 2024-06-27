import { QueryClient } from '@tanstack/react-query';
import React from 'react';
export declare const queryClient: QueryClient;
export declare function AppRoot({ ProviderComponents }: {
    ProviderComponents: React.FunctionComponent<{
        children: Children;
    }>;
}): import("react/jsx-runtime").JSX.Element;

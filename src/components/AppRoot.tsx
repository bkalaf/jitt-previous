import { RouterProvider } from 'react-router-dom';
import { appRouter } from './Router';
import { QueryClient } from '@tanstack/react-query';
import React from 'react';

export const queryClient = new QueryClient();

export function AppRoot({ ProviderComponents } : { ProviderComponents: React.FunctionComponent<{ children: Children }> }) {
    return <RouterProvider router={appRouter(ProviderComponents)} />
}



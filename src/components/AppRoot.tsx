import { RouterProvider } from 'react-router-dom';
import { appRouter } from './Router';
import { QueryClient } from '@tanstack/react-query';
import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // initialData: [],
            refetchOnWindowFocus: false,
            staleTime: Infinity
        }
    }
});

export function AppRoot({ ProviderComponents }: { ProviderComponents: React.FunctionComponent<{ children: Children }> }) {
    return (
        <React.Suspense
            fallback={
                <Backdrop sx={{ color: '#fff', zIndex: 50 }} open={true}>
                    <CircularProgress color='error'  />
                </Backdrop>
            }>
            <RouterProvider router={appRouter(ProviderComponents)} />
        </React.Suspense>
    );
}

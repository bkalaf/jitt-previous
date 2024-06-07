import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SnackbarProvider } from 'notistack';
import { QueryClientProvider } from '@tanstack/react-query';
import { ForagerProvider } from '../contexts/ForagerProvider';
import { RealmProvider } from '../contexts/RealmProvider';
import React from 'react';
import { queryClient } from './AppRoot';
import { ConfigurationProvider } from '../contexts/ConfigurationProvider';
import { FileSystemContextProvider } from './../contexts/FileSystemContextProvider';
import { EnvProvider } from './../contexts/EnvProvider';

export function AppProviders({ children }: { children: Children }) {
    return (
        <React.Suspense fallback={<div>Laoding...</div>}>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <SnackbarProvider maxSnack={10} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} autoHideDuration={4000}>
                        <EnvProvider>
                            <FileSystemContextProvider>
                                <RealmProvider>
                                    <QueryClientProvider client={queryClient}>
                                        <ForagerProvider>
                                            <ConfigurationProvider>{children}</ConfigurationProvider>
                                        </ForagerProvider>
                                    </QueryClientProvider>
                                </RealmProvider>
                            </FileSystemContextProvider>
                        </EnvProvider>
                    </SnackbarProvider>
                </LocalizationProvider>
            </ThemeProvider>
        </React.Suspense>
    );
}

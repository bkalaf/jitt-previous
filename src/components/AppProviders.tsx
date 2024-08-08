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
import { BarcodeGeneratorProvider } from '../contexts/BarcodeGeneratorProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DropboxProvider } from '../contexts/DropboxProvider';

export function AppProviders({ children }: { children: Children }) {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <SnackbarProvider maxSnack={10} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} autoHideDuration={4000}>
                        <EnvProvider>
                            <FileSystemContextProvider>
                                <RealmProvider>
                                    <DropboxProvider>
                                        <QueryClientProvider client={queryClient}>
                                            <ForagerProvider>
                                                <ConfigurationProvider>
                                                    <BarcodeGeneratorProvider>{children}</BarcodeGeneratorProvider>
                                                </ConfigurationProvider>
                                            </ForagerProvider>
                                            <ReactQueryDevtools initialIsOpen />
                                        </QueryClientProvider>
                                    </DropboxProvider>
                                </RealmProvider>
                            </FileSystemContextProvider>
                        </EnvProvider>
                    </SnackbarProvider>
                </LocalizationProvider>
            </ThemeProvider>
        </React.Suspense>
    );
}

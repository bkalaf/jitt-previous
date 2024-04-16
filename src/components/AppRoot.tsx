import { ThemeProvider } from '@emotion/react';
import { EnvProvider } from '../contexts/EnvContext';
import { RealmProvider } from '../contexts/RealmContext';
import { theme } from './theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SnackbarProvider } from 'notistack';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ForagerProvider } from '../contexts/ForagerProvider';

const queryClient = new QueryClient();

export function AppRoot() {
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <SnackbarProvider maxSnack={10} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} autoHideDuration={4000}>
                    <EnvProvider>
                        <RealmProvider>
                            <QueryClientProvider client={queryClient}>
                                <ForagerProvider>
                                    <RouterProvider router={appRouter} />
                                </ForagerProvider>
                            </QueryClientProvider>
                        </RealmProvider>
                    </EnvProvider>
                </SnackbarProvider>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

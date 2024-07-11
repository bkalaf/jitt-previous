import { AppBar, Backdrop, Box, CircularProgress, CssBaseline, Link, Toolbar } from '@mui/material';
import './../schema';
import logo from './../assets/logos/resized-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faHome, faTable } from '@fortawesome/pro-solid-svg-icons';
import { Outlet, matchPath, useNavigate } from 'react-router';
import { MainMenu } from './MainMenu';
import { IconBtn } from './IconBtn';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getCurrentWebContents } from '@electron/remote';
import { useConfiguration } from '../hooks/useConfiguration';
import { useEventListener } from './useEventListener';
import { NavLink as RRLink } from 'react-router-dom';

export function BreadcrumbItem({ path, name }: { path: string; name: string }) {
    return (
        <Link component={RRLink as any} underline='hover' href={path} className='text-white'>
            <FontAwesomeIcon className='mr-1.5 text-white' icon={faTable} size='sm' />
            {name}
        </Link>
    );
}

export type ISource<TEventMap, TEventName extends keyof TEventMap = keyof TEventMap, TEvent extends Event = Event> = {
    addEventListener(eventName: TEventName, listener: (ev: TEvent) => void): void;
    removeEventListener(eventName: TEventName, listener: (ev: TEvent) => void): void;
};

export function App() {
    const { updateConfig, configuration } = useConfiguration();
    const mh = (window.visualViewport?.height ?? 0) - 66.95 - 35.99 - 35.99;
    const maxHeight = `${mh.toFixed(0)}px`;
    const modifyZoom = useCallback(
        (modifier: number) => {
            return () => {
                updateConfig('zoomLevel', configuration.zoomLevel + modifier);
            };
        },
        [configuration.zoomLevel, updateConfig]
    );
    const incrementZoom = useMemo(() => modifyZoom(0.1), [modifyZoom]);
    const decrementZoom = useMemo(() => modifyZoom(-0.1), [modifyZoom]);
    useEffect(() => {
        getCurrentWebContents().setZoomFactor(configuration.zoomLevel);
    }, [configuration.zoomLevel]);
    const onWheel = useCallback(
        (ev: WheelEvent) => {
            const direction = ev.deltaY > 0 ? 'down' : 'up';
            if (ev.ctrlKey) {
                switch (direction) {
                    case 'down':
                        return decrementZoom();
                    case 'up':
                        return incrementZoom();
                }
            }
        },
        [decrementZoom, incrementZoom]
    );
    const [currentURL, setCurrentURL] = useState<string>('');
    const onNavigate = useCallback((ev: any) => {
        const e = ev as { destination: { url: string } };
        console.info('navigate.url', e.destination.url);
        const url = new URL(e.destination.url);
        console.info('url', url);
        const matcher = matchPath('/data/v1/:collection', url.hash.slice(1));
        console.info('matcher', matcher);
        if (matcher == null) {
            return setCurrentURL(url.hash);
        }
        setCurrentURL(url.hash.slice(1));
    }, [])
    const navigate = useNavigate();
    const goHome = useCallback(() => navigate('/'), [navigate]);
    const goPrevious = useCallback(() => navigate(-1), [navigate])
    useEventListener<DocumentEventMap, 'wheel', WheelEvent>(document, 'wheel', onWheel);
    useEventListener<any, 'navigate', Event>((window as any).navigation, 'navigate' as any, onNavigate);
    return (
        <>
            <CssBaseline />
            <Box component='section' className='max-w-screen flex h-screen max-h-screen w-screen flex-grow flex-col justify-around'>
                <AppBar color='primary' position='static'>
                    <Toolbar variant='dense' className='flex items-center justify-start gap-x-2' disableGutters>
                        <img src={logo} alt='logo' className='flex h-14' />
                        <IconBtn onClick={goHome} icon={faHome} iconSize='sm' tooltip='Go to the home page.' />
                        <IconBtn onClick={goPrevious} icon={faCircleLeft} iconSize='sm' tooltip='Go to the previous page.' />
                        <span className='flex w-full justify-start'>
                            <MainMenu />
                        </span>
                    </Toolbar>
                </AppBar>
                <React.Suspense
                    fallback={
                        <Backdrop sx={{ color: '#fff', zIndex: 50 }} open={true}>
                            <CircularProgress color='inherit' />
                        </Backdrop>
                    }>
                    <Box
                        className='flex flex-grow bg-pink-400'
                        sx={{
                            maxHeight
                        }}>
                        <Outlet />
                    </Box>
                </React.Suspense>
                <AppBar component='footer' position='static' className='flex w-full bg-black p-1' sx={{ top: 'auto', bottom: 0 }}>
                    <span className='flex max-w-fit rounded-lg bg-blue-500 p-0.5 px-1 text-sm'>{currentURL}</span>
                </AppBar>
            </Box>
        </>
    );
}

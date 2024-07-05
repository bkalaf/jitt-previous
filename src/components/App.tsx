import { AppBar, Backdrop, Box, Breadcrumbs, CircularProgress, CssBaseline, LinearProgress, Link, Toolbar } from '@mui/material';
import './../schema';
import logo from './../assets/logos/resized-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faHome, faTable } from '@fortawesome/pro-solid-svg-icons';
import { Outlet, useLocation } from 'react-router';
import { NavLink as RRLink } from 'react-router-dom';
import { MainMenu } from './MainMenu';
import { useEnv } from '../hooks/useEnv';
import { IconBtn } from './IconBtn';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getCurrentWebContents } from '@electron/remote';
import { useConfiguration } from '../hooks/useConfiguration';
import { useToggler } from '../hooks/useToggler';
import { camelToProper } from '../common/text/camelToProper';
import { useTypes } from '../hooks/useTypes';

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

export function App() {
    const { updateConfig, configuration } = useConfiguration();
    const context = useEnv();
    console.log(context.REALM_APP_ID);
    const location = useLocation();
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
    const types = useTypes();
    console.log(`TYPES`, types);
    useEffect(() => {
        getCurrentWebContents().setZoomFactor(configuration.zoomLevel);
    }, [configuration.zoomLevel]);
    useEventListener<DocumentEventMap, 'wheel', WheelEvent>(document, 'wheel', (ev: WheelEvent) => {
        const direction = ev.deltaY > 0 ? 'down' : 'up';
        console.error(direction, ev);
        if (ev.ctrlKey) {
            switch (direction) {
                case 'down':
                    return decrementZoom();
                case 'up':
                    return incrementZoom();
            }
        }
    });
    const [showProgress, toggleProgress] = useToggler(false);
    const [progressValue, setProgressValue] = useState(0);
    return (
        <>
            <CssBaseline />
            <Box component='section' className='flex flex-col justify-around flex-grow w-screen h-screen max-h-screen max-w-screen'>
                <AppBar color='primary' position='static'>
                    <Toolbar variant='dense' className='flex items-center justify-start gap-x-2' disableGutters>
                        <img src={logo} alt='logo' className='flex h-14' />
                        <IconBtn icon={faHome} iconSize='sm' tooltip='Go to the home page.' />
                        <IconBtn icon={faCircleLeft} iconSize='sm' tooltip='Go to the previous page.' />
                        <span className='flex justify-start w-full'>
                            <MainMenu toggleProgress={toggleProgress} setProgressValue={setProgressValue} />
                        </span>
                    </Toolbar>
                </AppBar>
                <Box className='flex justify-between w-full p-1 text-white bg-slate-500'>
                    <Breadcrumbs separator='>' className='flex ml-3 text-SvgMachineWashGentleOrDelicate' aria-label='breadcrumbs'>
                        <RRLink to='/'>Home</RRLink>
                        {location.pathname.length > 1 &&
                            location.pathname
                                .slice(1)
                                .split('/')
                                .map((value, index, array) => [value, ['', ...array.slice(0, index), value].join('/')])
                                .map(([name, path]) => <BreadcrumbItem key={path} name={camelToProper(name)} path={path} />)}
                    </Breadcrumbs>
                </Box>
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
                <AppBar component='footer' position='static' className='flex w-full p-1 bg-black' sx={{ top: 'auto', bottom: 0 }}>
                    {/* <span className='flex p-0.5 px-1 rounded-lg text-sm bg-blue-500 max-w-fit'>Bottom Bar</span> */}
                    {showProgress && <LinearProgress variant='determinate' value={progressValue} color='error' />}
                </AppBar>
            </Box>
        </>
    );
}

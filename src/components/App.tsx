import { AppBar, Backdrop, Box, Breadcrumbs, CircularProgress, CssBaseline, Link, Toolbar } from '@mui/material';
import logo from './../assets/logos/resized-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faHome, faTable } from '@fortawesome/pro-solid-svg-icons';
import { Outlet, useLocation } from 'react-router';
import { NavLink as RRLink } from 'react-router-dom';
import { MainMenu } from './MainMenu';
import { camelToProper } from '../common/text';
import { useEnv } from '../hooks/useEnv';
import { IconBtn } from './IconBtn';
import React from 'react';

export function BreadcrumbItem({ path, name }: { path: string; name: string }) {
    return (
        <Link component={RRLink as any} underline='hover' href={path} className='text-white'>
            <FontAwesomeIcon className='text-white mr-1.5' icon={faTable} size='sm' />
            {name}
        </Link>
    );
}

export function App() {
    const context = useEnv();
    console.log(context.REALM_APP_ID);
    const location = useLocation();
    const mh = (window.visualViewport?.height ?? 0) - 66.95 - 35.99 - 35.99;
    const maxHeight = `${mh.toFixed(0)}px`;
    console.log(`location`, location, location.pathname);
    console.log(
        `segments`,
        location.pathname
            .slice(1)
            .split('/')
            .map((value, index, array) => [value, ['', ...array.slice(0, index), value].join('/')])
    );
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
                            <MainMenu />
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
                    }
                >
                    <Box
                        className='flex flex-grow bg-pink-400'
                        sx={{
                            maxHeight
                        }}
                    >
                        <Outlet />
                    </Box>
                </React.Suspense>
                <AppBar component='footer' position='static' className='flex w-full p-1 bg-black' sx={{ top: 'auto', bottom: 0 }}>
                    <span className='flex p-0.5 px-1 rounded-lg text-sm bg-blue-500 max-w-fit'>Bottom Bar</span>
                </AppBar>
            </Box>
        </>
    );
}

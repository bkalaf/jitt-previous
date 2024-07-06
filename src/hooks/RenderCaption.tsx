import { Box, Breadcrumbs } from '@mui/material';
import { camelToProper } from '../common/text/camelToProper';
import { BreadcrumbItem } from '../components/App';
import { NavLink as RRLink } from 'react-router-dom';

// const c: MRT_TableOptions<any>['muiDetailPanelProps'];
export function RenderCaption() {
    return (
        <Box className='flex w-full justify-between bg-slate-500 p-1 text-white'>
            <Breadcrumbs separator=' > ' className='text-SvgMachineWashGentleOrDelicate ml-3 flex' aria-label='Breadcrumbs'>
                <RRLink to='/'>Home</RRLink>
                {location.pathname.length > 1 &&
                    location.pathname
                        .slice(1)
                        .split('/')
                        .map((value, index, array) => [value, ['', ...array.slice(0, index), value].join('/')])
                        .map(([name, path]) => <BreadcrumbItem key={path} name={camelToProper(name)} path={path} />)}
            </Breadcrumbs>
        </Box>
    );
}

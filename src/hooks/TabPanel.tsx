import { Box } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role='tabpanel' hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} className='w-screen' {...other}>
            {value === index && (
                <Box sx={{ p: 3 }} className='w-screen'>
                   {children}
                </Box>
            )}
        </div>
    );
}

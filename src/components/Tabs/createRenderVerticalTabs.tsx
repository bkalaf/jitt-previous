import { SyntheticEvent, useCallback, useMemo, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { tabList } from '../../hooks/tabList';
import { useEffectiveCollection } from '../../hooks/useEffectiveCollection';
import { TabPanel } from './TabPanel';
import { MRT_RowData } from 'material-react-table';
import { DetailTypes, IProduct } from '../../types';

export function createRenderVerticalTabs<T extends MRT_RowData>(collection: string) {
    const tabs = tabList[collection];
    return function VerticalTabPanel(props: RenderDetailTabPanelProps<T>) {
        const collection = useEffectiveCollection();
        const effectiveTabs = useMemo(() => (collection === 'product' ? [tabs[0], ...tabs.slice(1).filter((x) => (props.row.original as any as IProduct).path.join('/').includes(x.type as DetailTypes))] : tabs), [collection, props.row.original]);
        const [value, setValue] = useState(0);
        const handleChange = useCallback((ev: SyntheticEvent, newValue: number) => {
            // console.log(`handleChange-tabs`, ev, newValue);
            setValue(newValue);
        }, []);
        return (
            <Box className='w-screen flex flex-row'>
                <Box className='border-right w-1/10 flex h-full border-black bg-slate-300'>
                    <Tabs value={value} onChange={handleChange} orientation='vertical' indicatorColor='primary' variant='scrollable' className='w-1/10 flex h-full border-r-2 border-slate-500'>
                        {effectiveTabs.map(({ label }, ix) => (
                            <Tab label={label} key={ix} />
                        ))}
                    </Tabs>
                </Box>
                <div className='flex h-full w-full'>
                    {effectiveTabs.map(({ Component }, ix) => {
                        const Comp = Component as React.FunctionComponent<RenderDetailTabPanelProps<T>>;
                        return (
                            <TabPanel key={ix} value={value} index={ix}>
                                <Comp {...props} />
                            </TabPanel>
                        );
                    })}
                </div>
            </Box>
        );
    };
}

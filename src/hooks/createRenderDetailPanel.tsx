import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { useWhyDidIUpdate } from './useWhyDidIUpdate';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Tab } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import { useCollectionRoute } from './useCollectionRoute';
import { Panel } from './Panel';
import { DetailTypes, IProduct } from '../types';
import { tabList } from './tabList';




export function CreateRenderDetailPanel<T extends MRT_RowData>(props: Parameters<Exclude<MRT_TableOptions<T>['renderDetailPanel'], undefined>>[0]) {
    useWhyDidIUpdate('createRenderDetailPanel', props);
    const collection = useCollectionRoute();
    const tabs = useMemo(() => Object.values(tabList[collection as keyof typeof tabList]) as [], [collection]);
    const [currentValue, setValue] = useState<string>((tabs ?? []).at(0) ?? '');
    const handleChange = useCallback((ev: any, newValue: string) => {
        setValue(newValue);
    }, []);
    const checkForDetailType = useCallback(
        (type?: string | string[]) => {
            if (type == null) return true;
            const types = typeof type === 'string' ? [type] : type;
            const product = props.row.original as any as IProduct;
            return types.some((t) => product.detailTypes.includes(t as DetailTypes));
        },
        [props.row.original]
    );
    return (
        ((props.table.getState().expanded as any) ?? {})[props.row.id] && (
            <Container className='w-screen'>
                <Box className='w-full'>
                    <TabContext value={currentValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label='Tabs'>
                                {tabs.map(({ value, label, detailType }) => checkForDetailType(detailType) && <Tab key={value} label={label} value={value} />)}
                            </TabList>
                        </Box>
                        {tabs.map(
                            ({ value, Component, property, detailType, objectType }) =>
                                checkForDetailType(detailType) && (
                                    <TabPanel key={value} value={value}>
                                        <Panel Component={Component} property={property} original={props.row.original} objectType={objectType} isCurrent={checkForDetailType(detailType)} />
                                    </TabPanel>
                                )
                        )}
                    </TabContext>
                </Box>
            </Container>
        )
    );
}

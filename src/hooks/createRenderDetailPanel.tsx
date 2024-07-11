import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { useWhyDidIUpdate } from './useWhyDidIUpdate';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import { useCollectionRoute } from './useCollectionRoute';
import { Panel } from './Panel';
import { DetailTypes, IProduct } from '../types';
import { tabList } from './tabList';

export function PanelForTab(props: { value: number; index: number; children?: Children }) {
    const { value, index, children, ...rest } = props;
    return (
        value === index && (
            <div hidden={value !== index} role='tabpanel' id={`tabpanel-${index}`} {...rest}>
                {children}
            </div>
        )
    );
}

const detailsType = {
    apparel: 0,
    'apparel/bottoms': 1,
    'apparel/bottoms/legged': 2,
    'apparel/bras': 3,
    'apparel/bras/swimsuit': 4,
    'apparel/footwear': 5,
    'apparel/tops': 6,
    cables: 7,
    'cables/data': 8,
    'cables/power': 9,
    'cables/video': 10,
    electronics: 11,
    'electronics/computer-components': 12,
    'electronics/computer-components/battery': 13,
    'electronics/computer-components/drives': 14,
    'electronics/computer-components/networking': 15,
    'electronics/computer-components/ram': 16,
    'electronics/kitchen-appliances': 17,
    'electronics/visual': 18,
    'electronics/visual/cell-phones': 19,
    general: 20,
    'home-goods': 21,
    'home-goods/decor': 22,
    'home-goods/decor/wall-art': 23,
    'home-goods/dinnerware': 24,
    'home-goods/flatware': 25,
    'home-goods/glassware': 26,
    jewelry: 27,
    'jewelry/costume': 28,
    'jewelry/precious-metal': 29,
    media: 30,
    'media/books': 31,
    'media/music': 32,
    'media/video-games': 33,
    'media/videos': 34,
    'media/videos/film': 35,
    'media/videos/tv-series': 36,
    'sporting-goods': 37,
    'sporting-goods/bowling': 38,
    'sporting-goods/bowling/balls': 46,
    'sporting-goods/golf': 39,
    'sporting-goods/golf/clubs': 40,
    'sporting-goods/tennis': 41,
    'sporting-goods/tennis/rackets': 42,
    toys: 43,
    'toys/board-games': 44,
    'toys/stuffed-animals': 45
};

// export function renderVerticalTabs(tabs: DetailsNode[]) {
//     return function VerticalTabs() {
//         const { tab: T, panel: P } = useCallback(
//             (props: Parameters<Exclude<MRT_TableOptions<any>['renderDetailPanel'], undefined>>[0]) =>
//                 tabs
//                     .map((t) => NodeTab({ Details: t, className: '' }))
//                     .reduce(
//                         ({ tab: TabPv, panel: PanelPv }, { tab: TabCv, panel: PanelCv }) => ({
//                             tab: () => (
//                                 <>
//                                     <TabPv />
//                                     <TabCv />
//                                 </>
//                             ),
//                             panel: () => (
//                                 <>
//                                     <PanelPv />
//                                     <PanelCv {...props} />
//                                 </>
//                             )
//                         }),
//                         { tab: (): React.ReactNode => null, panel: (): React.ReactNode => null }
//                     ),
//             []
//         );
//         const [value, setValue] = useState<number>(0);
//         const handleChange = useCallback((ev: React.SyntheticEvent, newValue: number) => {
//             ev.preventDefault();
//             ev.stopPropagation();
//             setValue(newValue);
//         }, []);
//         return (
//             <Box className='flex h-1/4 w-screen flex-grow flex-row bg-slate-400'>
//                 <Tabs value={value} onChange={handleChange} orientation='vertical' indicatorColor='primary' variant='scrollable' className='w-1/10 flex h-full border-r-2 border-slate-500'>
//                     <T />
//                 </Tabs>
//                 <Box className='flex h-full w-full'>
//                     <P />
//                 </Box>
//             </Box>
//         );
//     };
// }

// export function TabForType({ type, bg, text, value, label, columns }: { type: DetailTypes; bg: string; text: string; value: number; label: string; columns: MRT_ColumnDef<any>[] }) {
//     const { className } = useMemo(() => $className({}, {}, bg, text), [])
//     return <Tab label={label} className={className} />
// }

// export function NodeTab(props: { Details: DetailsNode; className?: string; $value: number }) {
//     const {
//         Details: {
//             bg,
//             text,
//             children,
//             Ctor: { label, type, columns },
//             $value
//         },
//         ...rest
//     } = props;
//     const value = detailsType[$value];
//     const spread = useMemo(() => $className(rest, {}, bg, text), [bg, rest, text]);
//     return {
//         tab: () => <Tab label={label} value={detailsType[type]} {...spread} />,
//         panel: function DetailsPanel<T extends MRT_RowData>(props: Parameters<Exclude<MRT_TableOptions<any>['renderDetailPanel'], undefined>>[0]) {
//             const original = props.row.original;
//             const initialValues = useMemo(() => convertProduct(original as any), [original]);
//             const defaultValues = useMemo(() => Product.init() as DefaultValues<IProduct>, []);
//             const formContext = useForm({
//                 defaultValues: defaultValues,
//                 values: initialValues
//             });
//             const { handleSubmit } = useUpdateRecord(formContext, original.id, props.table, 'product');
//             return (
//                 <PanelForTab index={detailsType[type]} value={value}>
//                     <FormProvider {...formContext}>
//                         <Grid columns={4} gap={2} className='w-screen'>
//                             <EditControls columns={columns} />
//                         </Grid>
//                         <div className='flex grid-cols-4 justify-center'>
//                             <Button className='flex' type='button' variant='contained' color='metal' disabled={!formContext.formState.isDirty} onClick={ignore} />
//                         </div>
//                     </FormProvider>
//                 </PanelForTab>
//             );
//         }
//     };
// }
// export function createRenderDetailPanel(collection: string) {
//     const tabs = Object.values(tabList[collection as keyof typeof tabList]); // as DetailsClass[];
//     return function CreateRenderDetailPanel(props: Parameters<Exclude<MRT_TableOptions<T>['renderDetailPanel'], undefined>>[0]) {
//         useWhyDidIUpdate('CreateRenderDetailPanel', props);
//     };
// }

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
    return props.row.getIsExpanded() ?
            // <Container className='w-screen'>
            <Box className='w-screen'>
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
            // </Container>
        :   <></>;
}

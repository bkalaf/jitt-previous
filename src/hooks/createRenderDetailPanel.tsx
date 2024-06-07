import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { useWhyDidIUpdate } from './useWhyDidIUpdate';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Button, Tab, Unstable_Grid2 as Grid, Dialog, DialogContent, DialogActions } from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FacePOV, IFacing, IProductImage, ISku, ProductImageFlags } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/pro-solid-svg-icons';
import { Images } from './Images';
import { VisuallyHiddenInput } from './VisuallyHiddenInput';
import { Item } from './Item';
import { useCollectionRoute } from './useCollectionRoute';
import { Panel } from './Panel';
import { useLocalRealm } from './useLocalRealm';
import { BSON } from 'realm';
import path from 'path-browserify';
import { fromExtensionToMimeType } from '../util/fromExtensionToMimeType';
import * as fs from 'graceful-fs';
import { useToggler } from './useToggler';
import { FormProvider, useForm } from 'react-hook-form';
import { Image } from './Image';
import { runTransaction } from '../util/runTransaction';
import { useFileSystem } from '../contexts/useFileSystem';
import { useRabbitMQ } from '../contexts/useRabbitMQ';
import { getFolderNames, getRemBgName } from '../util/getFolderNames';
import { ProductImageDisposition } from '../schema/entity/ProductImageDisposition';
import { CheckboxButtonGroup, CheckboxElement, RadioButtonGroup, TextFieldElement } from 'react-hook-form-mui';
import { is } from '../common/is';
import { generateCaption } from '../util/generateCaption';
export const tabList = {
    sku: {
        getProductImages: {
            value: 'productImages',
            key: 'getProductImages',
            label: 'Images',
            Component: ProductImageTab
        },
        getAttachments: {
            value: 'attachments',
            key: 'attachments',
            label: 'Attachments',
            Component: ProductImageTab
        }
    }
};

export function CreateRenderDetailPanel<T extends MRT_RowData>(props: Parameters<Exclude<MRT_TableOptions<T>['renderDetailPanel'], undefined>>[0]) {
    useWhyDidIUpdate('createRenderDetailPanel', props);
    const collection = useCollectionRoute();
    const tabs = Object.values(tabList[collection as keyof typeof tabList]) as { value: string, key: string, label: string, Component: React.FunctionComponent<{ data: any[], original: any; }>; }[];
    const [value, setValue] = useState<string>(tabs[0].key);
    const handleChange = useCallback((ev: any, newValue: string) => {
        setValue(newValue);
    }, []);
    return (
        <Box className='w-full'>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label='Tabs'>
                        {tabs.map(({ value, label }) => <Tab key={value} label={label} value={value} />)}
                    </TabList>
                </Box>
                {tabs.map(({ value, Component, key }) => <TabPanel key={value} value={value}>
                    <Panel Component={Component} property={key} original={props.row.original} />
                </TabPanel>)}
            </TabContext>
        </Box>
    );
}

export function ProductImageTab(props: { data: IProductImage[]; original: ISku; }) {
    useWhyDidIUpdate('ProductImageTab', props);
    const { data, original } = props;
    const realm = useLocalRealm();
    const [open, toggleOpen] = useToggler(false);
    const [queue, setQueue] = useState<File[]>([]);
    const { scheduleFileChange } = useRabbitMQ();
    const { products, remBgExt, remBgSuffix, downloads } = useFileSystem();
    const popQueue = useCallback(() => {
        setQueue(prev => {
            const [, ...tail] = prev;
            return tail;
        });
    }, []);
    const nextInQueue = useMemo(() => {
        return queue[0];
    }, [queue]);
    useEffect(() => {
        if (queue.length !== 0 && !open) {
            toggleOpen();
        } else if (queue.length === 0 && open) {
            toggleOpen();
        }
    }, [open, queue.length, toggleOpen]);
    const onChange = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log(ev.target.files);
        if (ev.target.files == null) return;
        setQueue(Array.from(ev.target.files));
        // for (const file of ev.target.files) {
        //     const filename = file.path;
        //     const buffer = file.arrayBuffer();
        //     const takenOn = fs.statSync(filename).ctime;
        //     const func = () => {
        //         realm.create<IProductImage>('productImage', {
        //             _id: new BSON.ObjectId(),
        //             fullpath: filename,
        //             filename: path.basename(filename),
        //             extension: path.extname(filename).slice(0),
        //             mimeType: fromExtensionToMimeType(path.extname(filename).slice(0)),
        //             flags: [],
        //             takenOn: takenOn ?? new Date(Date.now()),
        //             sku: original
        //             // caption, facing
        //         });
        //     };
        // }
    }, []);
    const formContext = useForm({
        defaultValues: {
            caption: '',
            doNotRemBG: false,
            ignore: false,
            x: '',
            y: '',
            z: '',
            pov: [] as string[]
            // isUpper: false,
            // isLower: false,
            // isRight: false,
            // isLeft: false,
            // isFront: false,
            // isBack: false,
            // isLogo: false,
            // isTag: false,
            // isDefect: false,
            // isInner: false,
            // isInfo: false,
            // isBarcode: false
        }
    });
    const onSubmit = formContext.handleSubmit(data => {
        const { caption, doNotRemBG, ignore, pov, x, y, z } = data;
        const filename = nextInQueue.path;
        const takenOn = fs.statSync(filename).ctime;
        const folders = getFolderNames(original);
        const baseDestination = [products, ...folders].join('\\');
        const remBgName = getRemBgName(filename, remBgSuffix, remBgExt);
        const remBgSource = [downloads, remBgName].join('\\');
        const remBgDestination = [baseDestination, remBgName].join('\\');
        const hasRemBG = fs.existsSync(remBgSource);
        const facing = {
            pov: pov as FacePOV[],
            x: is.not.nil(x) ? x : undefined,
            y: is.not.nil(y) ? y : undefined,
            z: is.not.nil(z) ? z : undefined
        } as IFacing;
        const capt = is.not.nil(caption) ? generateCaption(facing).concat(' - ').concat(caption) : generateCaption(facing);
        const func = () => {
            realm.create<IProductImage>('productImage', {
                _id: new BSON.ObjectId(),
                fullpath: filename,
                filename: path.basename(filename),
                extension: path.extname(filename).slice(0),
                mimeType: fromExtensionToMimeType(path.extname(filename).slice(0)),
                flags: [...(doNotRemBG ? ['do-not-rembg'] : [] as ProductImageFlags[]), ...ignore ? ['ignore'] : [] as ProductImageFlags[]] as ProductImageFlags[],
                takenOn: takenOn ?? new Date(Date.now()),
                sku: original,
                hasRemBG,
                disposition: hasRemBG ? ProductImageDisposition.pendingApproval : doNotRemBG ? ProductImageDisposition.ready : ProductImageDisposition.bgRemoval,
                selected: doNotRemBG ? 'original' : undefined,
                facing: facing,
                caption: capt                
            });
        };
        runTransaction(realm, func);
        const originalDestination = [baseDestination, path.basename(filename)].join('\\');
        scheduleFileChange('move', filename, originalDestination);
        if (hasRemBG) {
            scheduleFileChange('move', remBgSource, remBgDestination);
        }
        formContext.reset();
        popQueue();
    });
    return <Grid spacing={2}>
        <Grid xs={12}>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                disabled={queue.length > 0}
                startIcon={<FontAwesomeIcon icon={faUpload} size='lg' />}
            >
                Upload file
                <VisuallyHiddenInput type="file" onChange={onChange} />
            </Button>
            {open && <Dialog open={open} onClose={toggleOpen} fullScreen>
                <FormProvider {...formContext}>
                    <DialogContent>
                        <div className='flex flex-col'>
                            <div className='w-full flex h-2/3'>
                                <Image filepath={nextInQueue.path} selected={false} caption='' />
                            </div>
                            <div className='w-full h-full'>
                                <TextFieldElement name='caption' type='text' label='Caption' />
                                <CheckboxElement name='doNotRemBG' label='Do Not Remove BG' />
                                <CheckboxElement name='ignore' label='Ignore' />
                                <RadioButtonGroup name='x' label='Facing-X' row options={[
                                    { label: 'Left', id: 'left' },
                                    { label: 'Right', id: 'right' },
                                    { label: 'None', id: '' }
                                ]} />
                                <RadioButtonGroup name='x' label='Facing-X' row options={[
                                    { label: 'Front', id: 'front' },
                                    { label: 'Back', id: 'back' },
                                    { label: 'None', id: '' }
                                ]} />
                                <RadioButtonGroup name='x' label='Facing-X' row options={[
                                    { label: 'Upper', id: 'upper' },
                                    { label: 'Lower', id: 'lower' },
                                    { label: 'None', id: '' }
                                ]} />
                                <CheckboxButtonGroup label='POVs' name='pov' row options={[
                                    { label: 'Inner', id: 'inner' },
                                    { label: 'Barcode', id: 'barcode' },
                                    { label: 'Tag', id: 'tag' },
                                    { label: 'Logo', id: 'logo' },
                                    { label: 'Product Info', id: 'product-info'},
                                    { label: 'Defect', id: 'defect' },
                                    { label: 'Enhancer', id: 'enhancer' }
                                ]} />
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' onClick={onSubmit} variant='contained'>Submit</Button>
                    </DialogActions>
                </FormProvider>
            </Dialog>}
        </Grid>
        <Grid xs={3}>
            {data.map((image, ix) => <Item key={ix} className='flex flex-col'>
                <Images productImage={image} />
            </Item>)}
        </Grid>
    </Grid>;
}
import { useWhyDidIUpdate } from './useWhyDidIUpdate';
import { Button, Dialog, DialogContent, DialogActions } from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FacePOV, IFacing, IProductImage, ISku, ProductImageFlags } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/pro-solid-svg-icons';
import { Images } from './Images';
import { VisuallyHiddenInput } from './VisuallyHiddenInput';
import { useLocalRealm } from './useLocalRealm';
import { BSON } from 'realm';
import * as path from 'path';
import { fromExtensionToMimeType } from '../util/fromExtensionToMimeType';
import * as fs from 'graceful-fs';
import { useToggler } from './useToggler';
import { FormProvider, useForm } from 'react-hook-form';
import { Image } from './Image';
import { runTransaction } from '../util/runTransaction';
import { useFileSystem } from '../contexts/useFileSystem';
import { getFolderNames, getRemBgName } from '../util/getFolderNames';
import { CheckboxButtonGroup, CheckboxElement, RadioButtonGroup, TextFieldElement } from 'react-hook-form-mui';
import { is } from '../common/is';
import { generateCaption } from '../util/generateCaption';
import { getBaseName } from './getBaseName';
import { ProductImageDisposition } from '../schema/entity/ProductImageDisposition';
import { checkPath } from '../contexts/checkFolder';
import { Grid, Item } from './Grid';

export function ProductImageTab(props: { data: IProductImage[]; original: ISku }) {
    useWhyDidIUpdate('ProductImageTab', props);
    const { data, original } = props;
    const realm = useLocalRealm();
    const [open, toggleOpen] = useToggler(false);
    const [queue, setQueue] = useState<File[]>([]);
    const { products, remBgExt, remBgSuffix, downloads } = useFileSystem();
    const popQueue = useCallback(() => {
        setQueue((prev) => {
            const [, ...tail] = prev;
            return tail;
        });
    }, []);
    const nextInQueue = useMemo(() => {
        return queue.length > 0 ? queue[0] : undefined;
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
            x: 'none',
            y: 'none',
            z: 'none',
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
    const onSubmit = formContext.handleSubmit((data) => {
        const { caption, doNotRemBG, ignore, pov, x, y, z } = data;
        const filename = nextInQueue?.path ?? '';
        const takenOn = fs.statSync(filename).ctime;
        const folders = getFolderNames(original);
        const baseDestination = [products, ...folders].join('\\');
        const remBgName = getRemBgName(filename, remBgSuffix, remBgExt);
        const remBgSource = [downloads, remBgName].join('\\');
        const remBgDestination = [baseDestination, remBgName].join('\\');
        const hasRemBG = fs.existsSync(remBgSource);
        const facing = {
            pov: pov as FacePOV[],
            x: x !== 'none' ? x : undefined,
            y: y !== 'none' ? y : undefined,
            z: z !== 'none' ? z : undefined
        } as InitValue<IFacing>;
        const capt =
            is.not.nil(caption) ?
                generateCaption(facing as any)
                    .concat(' - ')
                    .concat(caption)
            :   generateCaption(facing as any);
        const func = () => {
            realm.create<IProductImage>('productImage', {
                _id: new BSON.ObjectId(),
                fullpath: filename,
                filename: getBaseName(filename),
                extension: path.extname(filename),
                mimeType: fromExtensionToMimeType(path.extname(filename)),
                flags: [...(doNotRemBG ? ['do-not-rembg'] : ([] as ProductImageFlags[])), ...(ignore ? ['ignore'] : ([] as ProductImageFlags[]))] as ProductImageFlags[],
                takenOn: takenOn ?? new Date(Date.now()),
                sku: original,
                hasRemBG,
                disposition:
                    hasRemBG ? ProductImageDisposition.pendingApproval
                    : doNotRemBG ? ProductImageDisposition.ready
                    : (ProductImageDisposition.bgRemoval as any),
                selected: doNotRemBG ? 'original' : undefined,
                facing: facing as any,
                caption: capt
            });
        };
        runTransaction(realm, func);
        const originalDestination = [baseDestination, getBaseName(filename)].join('\\');
        checkPath(originalDestination, true);
        fs.copyFileSync(filename, originalDestination);
        fs.rmSync(filename);
        if (hasRemBG) {
            checkPath(remBgDestination, true);
            fs.copyFileSync(remBgSource, remBgDestination);
            fs.rmSync(remBgSource);
        }
        formContext.reset();
        popQueue();
    });
    return (
        <div className='flex w-screen flex-col'>
            <div className='flex w-full justify-start'>
                <Button component='label' role={undefined} variant='contained' tabIndex={-1} disabled={queue.length > 0} startIcon={<FontAwesomeIcon icon={faUpload} size='lg' />}>
                    Upload file
                    <VisuallyHiddenInput type='file' onChange={onChange} />
                </Button>
            </div>
            {open && (
                <Dialog open={open} onClose={toggleOpen} fullScreen>
                    <FormProvider {...formContext}>
                        <DialogContent>
                            <div className='flex flex-col'>
                                <div className='flex h-2/3 w-full object-scale-down'>
                                    <Image filepath={nextInQueue?.path ?? ''} selected={false} caption='' />
                                </div>
                                <div className='h-full w-full'>
                                    <TextFieldElement name='caption' type='text' label='Caption' control={formContext.control} />
                                    <CheckboxElement name='doNotRemBG' label='Do Not Remove BG' control={formContext.control} />
                                    <CheckboxElement name='ignore' label='Ignore' control={formContext.control} />
                                    <RadioButtonGroup
                                        name='x'
                                        label='Facing-X'
                                        row
                                        control={formContext.control}
                                        options={[
                                            { label: 'Left', id: 'left' },
                                            { label: 'Right', id: 'right' },
                                            { label: 'None', id: 'none' }
                                        ]}
                                    />
                                    <RadioButtonGroup
                                        name='y'
                                        label='Facing-Y'
                                        row
                                        control={formContext.control}
                                        options={[
                                            { label: 'Front', id: 'front' },
                                            { label: 'Back', id: 'back' },
                                            { label: 'None', id: 'none' }
                                        ]}
                                    />
                                    <RadioButtonGroup
                                        name='z'
                                        label='Facing-Z'
                                        control={formContext.control}
                                        row
                                        options={[
                                            { label: 'Upper', id: 'upper' },
                                            { label: 'Lower', id: 'lower' },
                                            { label: 'None', id: 'none' }
                                        ]}
                                    />
                                    <CheckboxButtonGroup
                                        label='POVs'
                                        name='pov'
                                        control={formContext.control}
                                        row
                                        options={[
                                            { label: 'Inner', id: 'inner' },
                                            { label: 'Barcode', id: 'barcode' },
                                            { label: 'Tag', id: 'tag' },
                                            { label: 'Logo', id: 'logo' },
                                            { label: 'Product Info', id: 'product-info' },
                                            { label: 'Defect', id: 'defect' },
                                            { label: 'Enhancer', id: 'enhancer' }
                                        ]}
                                    />
                                </div>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button type='button' onClick={onSubmit} variant='contained'>
                                Submit
                            </Button>
                        </DialogActions>
                    </FormProvider>
                </Dialog>
            )}
            <Grid columns={4} gap={2} className='w-full'>
                {data.map((image, ix) => (
                    <Item key={ix} className='flex w-full flex-col'>
                        <Images productImage={image} />
                    </Item>
                ))}
            </Grid>
        </div>
    );
}

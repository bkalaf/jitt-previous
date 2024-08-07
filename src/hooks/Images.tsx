/* eslint-disable no-console */
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useWhyDidIUpdate } from './useWhyDidIUpdate';
import { useCallback, useEffect, useState } from 'react';
import { IProductImage } from '../types';
import { getFolderNames, getRemBgName } from '../util/getFolderNames';
import { useFileSystem } from './useFileSystem';
import { checkPath } from '../contexts/checkFolder';
import { Image } from './Image';
import { useLocalRealm } from './useLocalRealm';
import { runTransaction } from '../util/runTransaction';
import { CheckboxElement, FormProvider, TextFieldElement, useForm } from 'react-hook-form-mui';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import { IconBtn } from '../components/IconBtn';
import { useInvalidateCollection } from './useInvalidateCollection';

const REMOVE_BG_EXT = process.env.REMOVE_BG_EXT ?? '';
const REMOVE_BG_SUFFIX = process.env.REMOVE_BG_SUFFIX ?? '';

export function Images(props: { width: number; productImage: IProductImage; index: number, data: IProductImage[] }) {
    useWhyDidIUpdate('Images', props);
    const { productImage, width, index, data } = props;
    const [brandFolder, skuFolder] = getFolderNames(productImage.sku);
    const { filename, caption, selected } = productImage;
    const { products } = useFileSystem();
    const remBgFn = getRemBgName(filename, REMOVE_BG_SUFFIX, REMOVE_BG_EXT);
    const basePath = [products, brandFolder, skuFolder].join('/');
    checkPath(basePath);
    console.info('REMBG', remBgFn);
    console.info('ORIGINAL', filename);
    const original = [basePath, filename].join('/');
    const removeBG = [basePath, remBgFn].join('/');
    console.info('FINALS', original, removeBG);
    const db = useLocalRealm();
    const [isIgnored, setIsIgnored] = useState(false);
    const [isDoNotRemBG, setDoNotRemBG] = useState(false);
    const formContext = useForm({
        defaultValues: {
            order: productImage.order
        }
    });
    const invalidator = useInvalidateCollection('productImage');
    useEffect(() => {
        if (productImage.order !== index) {
            const func = () => {
                productImage.order = index;
            };
            runTransaction(db, func);
        }
    }, [db, index, productImage]);
    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const func = () => {
                const obj = db.objectForPrimaryKey<IProductImage>('productImage', productImage._id);
                const targetValue = event.target.value;
                const newSelected = ['original', 'rembg'].includes(targetValue) ? targetValue : undefined;
                const newIgnore = targetValue === 'ignore' ? true : undefined;
                if (obj != null) {
                    if (newIgnore) {
                        // obj.flags = [...obj.flags ?? [], 'ignore'];
                    } else if (newSelected == null) {
                        obj.selected = undefined;
                    } else {
                        obj.selected = newSelected as 'original' | 'rembg';
                    }
                }
            };
            runTransaction(db, func);
        },
        [db, productImage._id]
    );
    const canMoveRight = useCallback(() => {
        return index !== data.length -1;
    }, [data.length, index])
    const canMoveLeft = useCallback(() => {
        return index !== 0;
    }, [index])
    const moveRight = useCallback(() => {
        const oldIndex = index;
        const newIndex = index + 1;
        const func = () => {
            data[newIndex].order = oldIndex;
            productImage.order = newIndex;
        }
        runTransaction(db, func);
        invalidator();
    }, [data, db, index, invalidator, productImage]) 
    const moveLeft = useCallback(() => {
        const oldIndex = index;
        const newIndex = index - 1;
        const func = () => {
            data[newIndex].order = oldIndex;
            productImage.order = newIndex;
        };
        runTransaction(db, func);
        invalidator();
    }, [data, db, index, invalidator, productImage]); 
    const internal = selected ?? (productImage.flags?.includes('ignore') ? 'ignore' : '');
    return (
        <>
            <div className='flex w-full'>
                <Image filepath={original} caption={caption} selected={selected === 'original'} width={width} />
                <Image filepath={removeBG} width={width} caption={caption} selected={selected === 'rembg'} />
            </div>
            <FormProvider {...formContext}>
                <form
                    onSubmit={(ev: React.FormEvent) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                    }}>
                    <div className='flex w-full'>
                        <div className='flex w-full justify-between'>
                            <IconBtn icon={faArrowLeft} tooltip='Move Left' disabled={!canMoveLeft()} onClick={moveLeft} />
                            <TextFieldElement name='order' type='number' label='Order' control={formContext.control} />
                            <IconBtn icon={faArrowRight} tooltip='Move Right' disabled={!canMoveRight()} onClick={moveRight} />
                        </div>
                        <FormControl>
                            <RadioGroup name='selected' row value={internal} onChange={handleChange}>
                                <FormControlLabel control={<Radio />} value='original' label='Original' />
                                <FormControlLabel control={<Radio />} value='rembg' label='Remove-BG' />
                                <FormControlLabel control={<Radio />} value='' label='Unselected' />
                                {/* <FormControlLabel control={<Radio />} value='ignore' label='IGNORE' /> */}
                            </RadioGroup>
                            <CheckboxElement
                                name='do-not-rembg'
                                checked={isDoNotRemBG}
                                label='Do not Remove BG'
                                onChange={(ev: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
                                    ev.preventDefault();
                                    ev.stopPropagation();
                                    const func = () => {
                                        const obj = db.objectForPrimaryKey<IProductImage>('productImage', productImage._id);
                                        if (obj == null) throw new Error('no productImage');
                                        if (checked) {
                                            obj.flags.push('do-not-rembg');
                                        } else {
                                            obj.flags.remove(obj.flags.indexOf('do-not-rembg'));
                                        }
                                    };
                                    runTransaction(db, func);
                                    setDoNotRemBG(checked);
                                }}
                            />
                            <CheckboxElement
                                name='ignore'
                                checked={isIgnored}
                                label='Ignore'
                                onChange={(ev: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
                                    ev.preventDefault();
                                    ev.stopPropagation();
                                    const func = () => {
                                        const obj = db.objectForPrimaryKey<IProductImage>('productImage', productImage._id);
                                        if (obj == null) throw new Error('no productImage');
                                        if (checked) {
                                            obj.flags.push('ignore');
                                        } else {
                                            obj.flags.remove(obj.flags.indexOf('ignore'));
                                        }
                                    };
                                    runTransaction(db, func);
                                    setIsIgnored(checked);
                                }}
                            />
                        </FormControl>
                    </div>
                </form>
            </FormProvider>
        </>
    );
}

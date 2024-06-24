import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useWhyDidIUpdate } from './useWhyDidIUpdate';
import { useCallback } from 'react';
import { IProductImage } from '../types';
import { getFolderNames } from '../util/getFolderNames';
import { useFileSystem } from '../contexts/useFileSystem';
import { checkFolder } from '../contexts/checkFolder';
import { Image } from './Image';
import { useLocalRealm } from './useLocalRealm';
import { runTransaction } from '../util/runTransaction';

export function Images(props: { productImage: IProductImage; }) {
    useWhyDidIUpdate('Images', props);
    const { productImage } = props;
    const [brandFolder, productFolder, skuFolder] = getFolderNames(productImage.sku);
    const { filename, caption, selected } = productImage;
    const { remBgExt, remBgSuffix, products } = useFileSystem();
    const remBgFn = filename.split('.')[0].concat(remBgSuffix).concat('.').concat(remBgExt);
    const basePath = [products, brandFolder, productFolder, skuFolder].join('\\');
    checkFolder(basePath);
    const original = [basePath, filename].join('\\');
    const removeBG = [basePath, remBgFn].join('\\');
    const db = useLocalRealm();
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const func = () => {
            const obj = db.objectForPrimaryKey<IProductImage>('productImage', productImage._id);
            const targetValue = event.target.value;
            const newSelected = ['original', 'rembg'].includes(targetValue) ? targetValue : undefined;
            const newIgnore = targetValue === 'ignore' ? true : undefined;
            if (obj != null) {
                if (newIgnore) {
                    obj.flags = [...obj.flags ?? [], 'ignore'];
                } else if (newSelected == null) {
                    obj.selected = undefined;
                } else {
                    obj.selected = newSelected as 'original' | 'rembg';
                }

            }
        };
        runTransaction(db, func);
    }, [db, productImage._id]);
    const internal = selected ?? (productImage.flags?.includes('ignore') ? 'ignore' : '');
    return (
        <>
            <div className='flex w-full'>
                <Image filepath={original} caption={caption} selected={selected === 'original'} />
                <Image filepath={removeBG} caption={caption} selected={selected === 'rembg'} />
            </div>
            <div className='flex w-full'>
                <FormControl>
                    <RadioGroup row value={internal} onChange={handleChange}>
                        <FormControlLabel control={<Radio />} value='original' label='Original' />
                        <FormControlLabel control={<Radio />} value='rembg' label='Remove-BG' />
                        <FormControlLabel control={<Radio />} value='' label='Unselected' />
                        <FormControlLabel control={<Radio />} value='ignore' label='IGNORE' />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
}

import { useCallback } from 'react';
import { FormProvider, TextFieldElement, useForm } from 'react-hook-form-mui';
import { Grid, Item } from '../../../hooks/Grid';
import { ok } from '../../../hooks/compareProduct';
import { addToQueueFile } from './addToQueueFile';
import { isOk } from './isOk';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { calculateISBN10FromISBN13, calculateISBN13FromISBN10 } from '../../../hooks/useUpdateRecord';
import { classifyBarcode } from '../../../util/classifyBarcode';

const PRODUCT_SEARCH_QUEUE = process.env.PRODUCT_SEARCH_QUEUE ?? '';

export function APISearchForm({ toggle, open }: { open: boolean; toggle: () => void }) {
    const formContext = useForm({
        defaultValues: {
            brandName: '',
            upc: '',
            isbn10: '',
            isbn13: '',
            title: '',
            asin: '',
            elid: '',
            modelNo: '',
            modelName: '',
            partNumbers: '',
            styleNo: '',
            category: ''
        } as {
            brandName?: string;
            asin?: string;
            upc?: string;
            isbn10?: string;
            isbn13?: string;
            title?: string;
            elid?: string;
            modelNo?: string;
            modelName?: string;
            partNumbers?: string;
            styleNo?: string;
            category?: string;
        }
    });
    const handleSubmit = useCallback(
        ({
            brandName,
            category,
            elid,
            isbn10,
            isbn13,
            modelName,
            modelNo,
            partNumbers,
            styleNo,
            title,
            upc,
            asin
        }: {
            brandName?: string;
            upc?: string;
            isbn10?: string;
            isbn13?: string;
            title?: string;
            asin?: string;
            elid?: string;
            modelNo?: string;
            modelName?: string;
            partNumbers?: string;
            styleNo?: string;
            category?: string;
        }) => {
            const calculatedPair = [isOk(isbn13, calculateISBN10FromISBN13), isOk(isbn10, calculateISBN13FromISBN10), classifyBarcode(upc ?? '')[1] === 'isbn-10' ? calculateISBN13FromISBN10(upc ?? '') : classifyBarcode(upc ?? '')[1] === 'isbn-13' ? calculateISBN10FromISBN13(upc ?? '') : undefined].filter(x => x != null && x.trim() !== '') as string[];
            const args = [
                ...calculatedPair.map(upc => ({ upc })),
                ...[upc, isbn10, isbn13].filter(ok).map((u: string) => ({ upc: u })),
                isOk(modelNo, (x: string) => isOk(brandName, (y: string) => ({ brandName: y, modelNo: x }))),
                isOk(modelNo, (x: string) => isOk(category, (y: string) => ({ category: y, modelNo: x }))),
                isOk(elid, (x: string) => ({ elid: x })),
                isOk(asin, (x: string) => ({ asin: x })),
                isOk(modelName, (x: string) => isOk(brandName, (y: string) => ({ brandName: y, modelName: x }))),
                isOk(modelName, (x: string) => isOk(category, (y: string) => ({ category: y, modelName: x }))),

                isOk(styleNo, (x: string) => isOk(brandName, (y: string) => ({ brandName: y, styleNo: x }))),
                isOk(title, (x: string) => ({ title: x })),
                ...isOk(partNumbers, (x: string) => isOk(brandName, (y: string) => x.split(', ').map((part: string) => ({ brandName: y, modelNo: part })))) ?? []
            ].filter((x) => x != null);
            // console.log(`args`, args);
            addToQueueFile(PRODUCT_SEARCH_QUEUE, args);
            formContext.reset();
            toggle();
        },
        [formContext, toggle]
    );
    const onSubmit = useCallback(
        (ev: React.FormEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            formContext.handleSubmit(handleSubmit)(ev);
        },
        [formContext, handleSubmit]
    );
    const onReset = useCallback(
        (ev: React.FormEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            formContext.reset();
        },
        [formContext]
    );

    return (
        <Dialog onClose={toggle} open={open} maxWidth='xl'>
            <FormProvider {...formContext}>
                <DialogTitle>SEARCH FOR ITEM</DialogTitle>
                <DialogContent>
                    <form id='api-search' onReset={onReset} onSubmit={onSubmit}>
                        <Grid gap={1} columns={3}>
                            <Item>
                                <TextFieldElement name='upc' validation={{ maxLength: 13, minLength: 10 }} control={formContext.control} type='text' label='UPC' />
                            </Item>
                            <Item>
                                <TextFieldElement name='isbn13' validation={{ maxLength: 13, minLength: 13, pattern: /^97[89]./ }} control={formContext.control} type='text' label='ISBN-13' />
                            </Item>
                            <Item>
                                <TextFieldElement name='isbn10' validation={{ maxLength: 10, minLength: 8 }} control={formContext.control} type='text' label='ISBN-10' />
                            </Item>
                            <Item>
                                <TextFieldElement name='asin' control={formContext.control} type='text' label='ASIN' />
                            </Item>
                            <Item>
                                <TextFieldElement name='elid' control={formContext.control} type='text' label='ELID' />
                            </Item>
                            <Item>
                                <TextFieldElement name='modelNo' control={formContext.control} type='text' label='Model #' />
                            </Item>
                            <Item>
                                <TextFieldElement name='modelName' control={formContext.control} type='text' label='Model Name' />
                            </Item>
                            <Item>
                                <TextFieldElement name='brandName' control={formContext.control} type='text' label='Brand Name' />
                            </Item>
                            <Item>
                                <TextFieldElement name='title' control={formContext.control} type='text' label='Title' />
                            </Item>
                            <Item>
                                <TextFieldElement name='styleNo' control={formContext.control} type='text' label='Style #' />
                            </Item>
                            <Item>
                                <TextFieldElement name='category' control={formContext.control} type='text' label='Category' />
                            </Item>
                            <Item>
                                <TextFieldElement name='partNumbers' control={formContext.control} type='text' label='Parts #s' />
                            </Item>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <div className='col-span-3 justify-center'>
                        <button onClick={onSubmit} type='submit' className='text-lg uppercase font-bold'>Submit</button>
                    </div>
                </DialogActions>
            </FormProvider>
        </Dialog>
    );
}

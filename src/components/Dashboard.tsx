import React, { useCallback } from 'react';
import { Grid } from '../hooks/Grid';
import { DashboardCategory, DashboardEntry } from './DashboardEntry';
import { useLocalRealm } from '../hooks/useLocalRealm';
import { IBarcode, IDraft, IHashTag, IMercariBrand, IMercariTaxonomy, IProduct, IProductImage, ISku } from '../types';
import * as fs from 'graceful-fs';

const PRODUCT_SEARCH_QUEUE = process.env.PRODUCT_SEARCH_QUEUE ?? '';

export function Dashboard() {
    const db = useLocalRealm();
    const productWithoutSkus = useCallback(() => db.objects<IProduct>('product').map((x) => x.linkingObjects('sku', 'product').length === 0).length, [db]);
    const skuWithoutDraft = useCallback(() => db.objects<ISku>('sku').map((x) => x.linkingObjects('draft', 'sku').length === 0).length, [db]);
    const unlistedDraft = useCallback(() => db.objects<IDraft>('draft').filter((x) => !x.isListed).length, [db]);
    const imagesUnapproved = useCallback(() => db.objects<IProductImage>('productImage').filter((x) => !x.hasSelection).length, [db]);
    const skusWithoutImages = useCallback(() => db.objects<ISku>('sku').map((x) => x.linkingObjects('productImage', 'sku').length === 0).length, [db]);
    const productSearchPending = useCallback(() => (JSON.parse(fs.readFileSync(PRODUCT_SEARCH_QUEUE).toString()) as any[]).length, []);
    const lastRunInventory = useCallback(() => Math.max(new Date(Date.parse('1990-01-01T00:00:00.000Z')).valueOf(), ...db.objects<ISku>('sku').map((x) => Math.max(...x.scans.map((y) => y.scanDate.valueOf())))), [db]);
    const lastRunBrandScrape = useCallback(
        () =>
            Math.max(
                ...(db
                    .objects<IMercariBrand>('mercariBrand')
                    .map((x) => x.timestamp?.valueOf())
                    .filter((x) => x != null) as number[])
            ),
        [db]
    );
    const lastRunHashTagScrape = useCallback(
        () =>
            Math.max(
                ...db
                    .objects<IHashTag>('hashTag')
                    .map((x) => x.mostRecent?.valueOf())
                    .filter((x) => x != null)
            ),
        [db]
    );
    const lastRunTaxonomyScrape = useCallback(
        () =>
            Math.max(
                ...(db
                    .objects<IMercariTaxonomy>('mercariTaxonomy')
                    .map((x) => x.timestamp?.valueOf())
                    .filter((x) => x != null) as number[])
            ),
        [db]
    );
    const lastRunCustomFieldScrape = useCallback(() => Date.parse('1990-01-01T00:00:00.000Z'), []);
    const skuBarcodesToPrint = useCallback(() => db.objects<IBarcode>('barcode').filter((x) => x.kind === 'sku' && x.beenPrinted === false).length, [db]);
    const binBarcodesToPrint = useCallback(() => db.objects<IBarcode>('barcode').filter((x) => x.kind === 'bin' && x.beenPrinted === false).length, [db]);
    const orphanBarcodes = useCallback(() => {
        const result = db.objects<IBarcode>('barcode').filter((x) => x.linkingObjectsCount() === 0);
        // console.log(`orphaned barcodes`, result.map(x => [x.type, x.kind, x.value]));
        return result.length;
    }, [db])
    return (
        <div className='flex h-full w-full flex-col bg-slate-800'>
            <Grid gap={2} columns={6} className='m-1.5'>
                <DashboardCategory label='PRODUCT & SKUS' className='border-violet-200 bg-indigo-800 text-white shadow-white' />
                <DashboardEntry className='border-slate-700 bg-indigo-500 text-black shadow-white' label='PRODUCTS WITHOUT SKUS' start={1} query={productWithoutSkus} collection='product' subName='skus == 0' limit={20} />
                <DashboardEntry className='border-slate-700 bg-indigo-500 text-black shadow-white' label='SKUS WITHOUT DRAFTS' collection='sku' subName='draft == null' query={skuWithoutDraft} limit={20} />
                <DashboardEntry className='border-slate-700 bg-indigo-500 text-black shadow-white' label='UNLISTED DRAFTS' collection='draft' subName='isListed == false' query={unlistedDraft} limit={20} />

                <DashboardCategory label='PRODUCT IMAGES' className='border-cyan-200 bg-blue-800 text-white shadow-white' />
                <DashboardEntry className='border-slate-700 bg-blue-500 text-black shadow-white' label='IMAGES UNAPPOVED' start={1} query={imagesUnapproved} collection='productImages' subName='hasSelection == false' limit={20} />
                <DashboardEntry className='border-slate-700 bg-blue-500 text-black shadow-white' label='SKUS WITHOUT IMAGES' query={skusWithoutImages} collection='sku' subName='productImages == 0' limit={20} />

                <DashboardCategory className='border-pink-200 bg-red-800 text-white shadow-white' label='EXTERNAL COMMANDS' />
                <DashboardEntry className='border-slate-700 bg-pink-500 text-black shadow-white' label='PRODUCT SEARCHS TO RUN' start={1} query={productSearchPending} collection='product' subName='searchs > 0' limit={20} />

                <DashboardCategory className='border-amber-200 bg-amber-700 text-white shadow-white' label='ADMIN ACTION' />
                <DashboardEntry className='border-slate-700 bg-amber-500 text-black shadow-white' label='LAST RUN INVENTORY' start={1} query={lastRunInventory} collection='sku' subName='scans.scanDate max' isDate limit={20} />
                <DashboardEntry className='border-slate-700 bg-amber-500 text-black shadow-white' label='LAST RUN BRAND SCRAPE' query={lastRunBrandScrape} collection='brand' subName='max timestamp' isDate limit={20} />
                <DashboardEntry className='border-slate-700 bg-amber-500 text-black shadow-white' label='LAST RUN TAXONOMY SCRAPE' collection='mercariTaxonomy' subName='max timestamp' query={lastRunTaxonomyScrape} isDate limit={20} />
                <DashboardEntry className='border-slate-700 bg-amber-500 text-black shadow-white' label='LAST RUN HASH TAG SCRAPE' collection='hashTag' subName='max timestamp' query={lastRunHashTagScrape} isDate limit={20} />
                <DashboardEntry className='border-slate-700 bg-amber-500 text-black shadow-white' label='LAST RUN CUSTOM FIELD SCRAPE' collection='mercariTaxonomy' subName='max customItemField.timstamp' query={lastRunCustomFieldScrape} isDate  limit={20}/>

                <DashboardCategory label='BARCODES TO PRINT' className='border-lime-200 bg-emerald-700 text-white shadow-white' />
                <DashboardEntry className='border-slate-700 bg-lime-500 text-black shadow-white' label='SKU BARCODES TO PRINT' start={1} collection='barcode' subName='kind == sku && beenPrinted == false' query={skuBarcodesToPrint} limit={20} />
                <DashboardEntry className='border-slate-700 bg-lime-500 text-black shadow-white' label='BIN BARCODES TO PRINT' collection='barcode' subName='kind == bin && beenPrinted == false' query={binBarcodesToPrint} limit={20} />
                <DashboardEntry className='border-slate-700 bg-lime-500 text-black shadow-white' label='ORPHANED BARCODES' collection='barcode' subName='linkingObjectCount() === 0' query={orphanBarcodes} limit={20} />

                {/* <DashboardEntry label='' value={0} /> */}
            </Grid>
            <div className='flex flex-grow'></div>
        </div>
    );
}

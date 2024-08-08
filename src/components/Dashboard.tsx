import { useCallback } from 'react';
import { Grid } from '../hooks/Grid';
import { DashboardCategory, DashboardEntry } from './DashboardEntry';
import { useLocalRealm } from '../hooks/useLocalRealm';
import { IBarcode, ISku } from '../types';
import {
    ObsoleteApiResults} from './Dashboard/ObsoleteApiResults';
import { LastRunHashTagScrape } from './Dashboard/LastRunHashTagScrape';
import { LastRunTaxonomyScrape } from './Dashboard/LastRunTaxonomyScrape';
import { LastRunBrandScrape } from './Dashboard/LastRunBrandScrape';
import { PromoteNotRun } from './Dashboard/PromoteNotRun';
import { BarcodeToPrintBin } from './Dashboard/BarcodeToPrintBin';
import { BarcodeToPrintSku } from './Dashboard/BarcodeToPrintSku';
import { BarcodeDoubleReference } from './Dashboard/BarcodeDoubleReference';
import { SkuWithoutImages } from './Dashboard/SkuWithoutImages';
import { UnlistedDraft } from './Dashboard/UnlistedDraft';
import { SkuWithoutBarcode } from './Dashboard/SkuWithoutBarcode';
import { SkuWithoutDraft } from './Dashboard/SkuWithoutDraft';
import { ProductWithoutSku } from './Dashboard/ProductWithoutSku';
import { ProductSearchPending } from './Dashboard/ProductSearchPending';
import { DashboardItem } from './Dashboard/DashboardItem';
import { ImagesUnapproved } from './Dashboard/ImagesUnapproved';

export function Dashboard() {
    const db = useLocalRealm();
    const lastRunInventory = useCallback(() => Math.max(new Date(Date.parse('1990-01-01T00:00:00.000Z')).valueOf(), ...db.objects<ISku>('sku').map((x) => Math.max(...x.scans.map((y) => y.scanDate.valueOf())))), [db]);

    const orphanBarcodes = useCallback(() => {
        const result = db.objects<IBarcode>('barcode').filter((x) => x.linkingObjectsCount() === 0);
        // eslint-disable-next-line no-console
        console.log(Array.from(result));
        // console.log(`orphaned barcodes`, result.map(x => [x.type, x.kind, x.value]));
        return result.length;
    }, [db]);
    return (
        <div className='flex h-full w-full flex-col bg-slate-800'>
            <Grid gap={2} columns={6} className='m-1.5'>
                <DashboardCategory label='PRODUCT & SKUS' className='border-violet-200 bg-indigo-800 text-white shadow-white' />
                <DashboardItem Component={ProductWithoutSku} className='border-slate-700 bg-indigo-500 text-black shadow-white' start={1} />
                <DashboardItem Component={SkuWithoutDraft} className='border-slate-700 bg-indigo-500 text-black shadow-white' />
                <DashboardItem Component={UnlistedDraft} className='border-slate-700 bg-indigo-500 text-black shadow-white' />
                <DashboardItem Component={SkuWithoutBarcode} className='border-slate-700 bg-indigo-500 text-black shadow-white' />

                <DashboardCategory label='PRODUCT IMAGES' className='border-cyan-200 bg-blue-800 text-white shadow-white' />
                <DashboardItem Component={ImagesUnapproved} className='border-slate-700 bg-blue-500 text-black shadow-white' start={1} />
                <DashboardItem Component={SkuWithoutImages} className='border-slate-700 bg-blue-500 text-black shadow-white' />

                <DashboardCategory className='border-pink-200 bg-red-800 text-white shadow-white' label='EXTERNAL COMMANDS' />
                <DashboardItem Component={ProductSearchPending} className='border-slate-700 bg-pink-500 text-black shadow-white' start={1} />
                <DashboardItem Component={ObsoleteApiResults} className='border-slate-700 bg-pink-500 text-black shadow-white' />

                <DashboardCategory className='border-amber-200 bg-amber-700 text-white shadow-white' label='ADMIN ACTION' />
                <DashboardEntry className='border-slate-700 bg-amber-500 text-black shadow-white' label='LAST RUN INVENTORY' start={1} query={lastRunInventory} collection='sku' subName='scans.scanDate max' isDate limit={20} />
                <DashboardItem Component={LastRunBrandScrape} className='border-slate-700 bg-amber-500 text-black shadow-white' />
                <DashboardItem Component={LastRunTaxonomyScrape} className='border-slate-700 bg-amber-500 text-black shadow-white' />
                <DashboardItem Component={LastRunHashTagScrape} className='border-slate-700 bg-amber-500 text-black shadow-white' />
                <DashboardItem Component={PromoteNotRun} className='border-slate-700 bg-amber-500 text-black shadow-white' />
                {/* <DashboardEntry
                    className='border-slate-700 bg-amber-500 text-black shadow-white'
                    label='LAST RUN CUSTOM FIELD SCRAPE'
                    collection='mercariTaxonomy'
                    subName='max customItemField.timstamp'
                    query={lastRunCustomFieldScrape}
                    isDate
                    limit={20}
                /> */}

                <DashboardCategory label='BARCODES TO PRINT' className='border-lime-200 bg-emerald-700 text-white shadow-white' />
                <DashboardItem Component={BarcodeToPrintSku} className='border-slate-700 bg-lime-500 text-black shadow-white' start={1} />
                <DashboardItem Component={BarcodeToPrintBin} className='border-slate-700 bg-lime-500 text-black shadow-white' />
                <DashboardItem Component={BarcodeDoubleReference} className='border-slate-700 bg-lime-500 text-black shadow-white' />
                <DashboardEntry className='border-slate-700 bg-lime-500 text-black shadow-white' label='ORPHANED BARCODES' collection='barcode' subName='linkingObjectCount() === 0' query={orphanBarcodes} limit={20} />

                {/* <DashboardEntry label='' value={0} /> */}
            </Grid>
            <div className='flex flex-grow'></div>
        </div>
    );
}

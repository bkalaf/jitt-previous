/* eslint-disable no-console */
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BaseDashboardEntry } from '../DashboardEntry';
import { IAdminTask, IBarcode, IDraft, IHashTag, IMercariBrand, IMercariTaxonomy, IProduct, ISku } from '../../types';
import dayjs from 'dayjs';
import { CircularProgress } from '@mui/material';
import React from 'react';
import * as fs from 'graceful-fs';

export function DashboardItem({ Component, ...props }: { Component: React.FunctionComponent<{ className?: string, start?: number }>, className?: string, start?: number  }) {
    return  <React.Suspense fallback={<span>Loading...</span>}>
        <Component {...props} />
    </React.Suspense>
}
const PRODUCT_SEARCH_QUEUE = process.env.PRODUCT_SEARCH_QUEUE ?? '';

export function ProductSearchPending(props: { className?: string; start?: number }) {
    const { data } = useSuspenseQuery({
        queryKey: ['apiResult', 'pending'],
        queryFn: () => {
            const total = (JSON.parse(fs.readFileSync(PRODUCT_SEARCH_QUEUE).toString()) as any[]).length;
            return Promise.resolve(total);
        }
        // initialData: 0,
    });
    const limit = data > 30 ? 'overlimit' : 'underlimit';
    return <BaseDashboardEntry value={data.toFixed(0)} limit={limit} label='PENDING PRODUCT SEARCHES' {...props} />;
}
export function ObsoleteApiResults(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['apiResult', 'obsolete'],
        queryFn: () => {
            const total = db.objects('apiResult').length;
            const obsolete = db.objects('apiResult').filtered('obsolete == $0', true).length;
            return Promise.resolve((obsolete / total) * 100);
        },
        // initialData: 0,        
    });
    const value = data.toFixed(2).concat('%');
    const limit = data > 30 ? 'overlimit' : 'underlimit';
    return <BaseDashboardEntry value={value} limit={limit} label='OBSOLETE API RESULTS' {...props} />;
}

export function ProductWithoutSku(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['product', 'sku == nil'],
        queryFn: () => {
            const total = db.objects<IProduct>('product').filter((x) => x.linkingObjects('sku', 'product').length === 0).length;
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='PRODUCT WITHOUT SKU' {...props} />;
}

export function SkuWithoutDraft(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['sku', 'draft == nil'],
        queryFn: () => {
            const total = db.objects<ISku>('sku').filter((x) => x.linkingObjects('draft', 'sku').length === 0).length;
            console.info('sku without draft', db.objects<ISku>('sku').filter((x) => x.linkingObjects('draft', 'sku').length === 0).map(x => x.getTitle))
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='SKU WITHOUT DRAFT' {...props} />;
}
export function SkuWithoutBarcode(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['sku', 'barcode == nil'],
        queryFn: () => {
            const total = db.objects<ISku>('sku').filter(x => x.skus.length === 0).length;
            return Promise.resolve(total);
        }
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='SKU WITHOUT BARCODE' {...props} />;
}

export function UnlistedDraft(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['draft', 'isListed == false'],
        queryFn: () => {
            const total = db.objects<IDraft>('draft').filter((x) => !x.isListed).length;
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='UNLISTED DRAFT' {...props} />;
}

export function SkuWithoutImages(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['sku', 'productImage == 0'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const total = db.objects<ISku>('sku').filter((x) => x.linkingObjects('productImage', 'sku').length === 0).length;
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='SKU WITHOUT IMAGES' {...props} />;
}
export function BarcodeDoubleReference(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['barcode', 'linkingObjects > 1'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const result = db.objects<IBarcode>('barcode').filter((x) => x.linkingObjectsCount() > 1);
            console.info(`double ref barcodes`, result.map(x => x.value));
            const total = result.length;
            return Promise.resolve(total);
        }
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='BARCODE DOUBLE REF' {...props} />;
}
export function BarcodeToPrintSku(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['barcode', 'kind == sku && beenPrinted == false'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const total = db.objects<IBarcode>('barcode').filter((x) => x.kind === 'sku' && x.beenPrinted === false).length;
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 50 ? 'overlimit' : 'underlimit'} label='BARCODES (SKUS) TO PRINT' {...props} />;
}
export function BarcodeToPrintBin(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['barcode', 'kind == bin && beenPrinted == false'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const total = db.objects<IBarcode>('barcode').filter((x) => x.kind === 'bin' && x.beenPrinted === false).length;
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 50 ? 'overlimit' : 'underlimit'} label='BARCODES (BINS) TO PRINT' {...props} />;
}
export function LastRunInventory(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['sku', 'productImage == 0'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const total = db.objects<ISku>('sku').map((x) => x.linkingObjects('productImage', 'sku').length === 0).length;
            return Promise.resolve(total);
        },
        // initialData: 0
    });
    return <BaseDashboardEntry value={data.toFixed(0)} limit={data >= 20 ? 'overlimit' : 'underlimit'} label='SKU WITHOUT IMAGES' {...props} />;
}
export function PromoteNotRun(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['adminTask', 'max timestamp'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const total = Math.max(
                ...(db
                    .objects<IAdminTask>('adminTask')
                    .map((x) => x.timestamp?.valueOf())
                    .filter((x) => x != null) as number[])
            );
            console.info(
                `total`,
                db.objects<IAdminTask>('adminTask').map((x) => x.timestamp?.valueOf())
            );
            return Promise.resolve(new Date(total));
        }
        // initialData: new Date(Date.parse('1990-01-01T00:00:00.000Z'))
    });
    return <BaseDashboardEntry value={dayjs(data).format('YYYY-MM-DD')} limit={dayjs(new Date(Date.now())).diff(data, 'd') > 1 ? 'overlimit' : 'underlimit'} label='PROMOTE LAST RUN' {...props} />;
}
export function LastRunBrandScrape(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['mercariBrand', 'max timestamp'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const total = Math.max(
                ...(db
                    .objects<IMercariBrand>('mercariBrand')
                    .map((x) => x.timestamp?.valueOf())
                    .filter((x) => x != null) as number[])
            );
            return Promise.resolve(new Date(total));
        },
        // initialData: new Date(Date.parse('1990-01-01T00:00:00.000Z'))
    });
    return <BaseDashboardEntry value={dayjs(data).format('YYYY-MM-DD')} limit={dayjs(new Date(Date.now())).diff(data, 'd') > 30 ? 'overlimit' : 'underlimit'} label='LAST RUN BRAND SCRAPE' {...props} />;
}
export function LastRunTaxonomyScrape(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data } = useSuspenseQuery({
        queryKey: ['mercariTaxonomy', 'max timestamp'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const total = Math.max(
                ...(db
                    .objects<IMercariTaxonomy>('mercariTaxonomy')
                    .map((x) => x.timestamp?.valueOf())
                    .filter((x) => x != null) as number[])
            );
            return Promise.resolve(new Date(total));
        },
        // initialData: new Date(Date.parse('1990-01-01T00:00:00.000Z'))
    });
    return <BaseDashboardEntry value={dayjs(data).format('YYYY-MM-DD')} limit={dayjs(new Date(Date.now())).diff(data, 'd') > 30 ? 'overlimit' : 'underlimit'} label='LAST RUN TAXONOMY SCRAPE' {...props} />;
}

export function LastRunHashTagScrape(props: { className?: string; start?: number }) {
    const db = useLocalRealm();
    const { data, isLoading } = useSuspenseQuery({
        queryKey: ['hashTag', 'max timestamp'],
        queryFn: () => {
            // const total = db.objects<ISku>('sku').filtered('NONE @links.productImage.sku').length;
            const hashes = db.objects<IHashTag>('hashTag');
            const maxFrom = hashes
                .map((x) => Math.max(...x.usage.map((usage) => usage.from.valueOf())))
                .sort((a, b) =>
                    a < b ? 1
                    : a > b ? -1
                    : 0
                );
            const total = Math.max(...maxFrom.slice(0, 20));
            return Promise.resolve(new Date(total));
        },
        // initialData: new Date(Date.parse('1991-01-01T00:00:00.000Z'))
    });
    return isLoading ? <CircularProgress /> : <BaseDashboardEntry value={dayjs(data).format('YYYY-MM-DD')} limit={dayjs(new Date(Date.now())).diff(data, 'd') > 30 ? 'overlimit' : 'underlimit'} label='LAST RUN HASH TAG SCRAPE' {...props} />;
}

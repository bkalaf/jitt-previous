import { Dialog, DialogContent, DialogTitle, Divider, LinearProgress, List, MenuItem, MenuList } from '@mui/material';
import { CategoryMenuItem } from './CategoryMenuItem';
import { RootCategoryMenuItem } from './RootCategoryMenuItem';
import { MainMenuItem } from './MainMenuItem';
import { getAppConfigPathed } from '../contexts/getAppConfigPathed';
import React, { useCallback, useMemo, useState } from 'react';
import { BaseMenuItem } from './BaseMenuItem';
import * as fs from 'graceful-fs';
import { useLocalRealm } from '../hooks/useLocalRealm';
import { IBarcode, IHashTag, IMercariBrand, IMercariTaxonomy } from '../types';
import { runTransaction } from '../util/runTransaction';
import { useToaster } from './Views/renderProperties/useToaster';
import * as path from 'path';
import { MercariTaxonomy } from '../schema/entity/mercariTaxonomy';
import { surroundQuotesIgnore, surroundQuotesNoIgnore } from '../common/text/surround';
import { BSON } from 'realm';
import * as cp from 'child_process';
import { ignore } from '../common/ignore';
// const mainMenuOptions = {
//     auctions: {
//         selfStorage: $.selfStorage(),
//         facility: $.facility(),
//         auction: $.auction()
//     },
//     mercari: {
//         hashTag: $.hashTag(),
//         mercariBrand: $.mercariBrand(),
//         mercariTaxonomy: $.mercariTaxonomy()
//     },
//     products: {
//         brand: $.brand(),
//         classifier: $.classifier(),
//         productImages: $.productImage(),
//         product: $.product()
//     },
//     inventory: {
//         barcode: $.barcode(),
//         bin: $.bin(),
//         sku: $.sku()
//     },
//     listings: {
//         draft: $.draft(),
//         listing: $.listing()
//     }
// };

export function MainMenu2() {
    return (
        <RootCategoryMenuItem header='Queries' direction='down'>
            <MenuList dense>
                <CategoryMenuItem direction='right' Component={MenuItem} label='Classifiers'>
                    <MenuList dense>
                        <MainMenuItem baseUrl='/queries/v1/' segment='classifierHierarchy' />
                    </MenuList>
                </CategoryMenuItem>
            </MenuList>
        </RootCategoryMenuItem>
    );
}

type HashTagImport = {
    name: string;
    count: number;
    from: number;
};

const barcodePrintFile = process.env.BARCODE_PRINT_FILE ?? '';
const downloads = process.env.DOWNLOADS_FOLDER ?? '';
export function Actions(props: { toggleProgress: () => void; setProgressValue: React.Dispatch<React.SetStateAction<number>> }) {
    console.log(props);
    const [progressValue] = useState<number | undefined>(undefined);
    const hashtags = getAppConfigPathed('hashTags.json');
    const brands = getAppConfigPathed('brands.json');
    const taxonomy = getAppConfigPathed('taxonomy.json');
    const skuToPrint = getAppConfigPathed(barcodePrintFile.replaceAll(path.extname(barcodePrintFile), '-sku'.concat(path.extname(barcodePrintFile))));
    const binToPrint = getAppConfigPathed(barcodePrintFile.replaceAll(path.extname(barcodePrintFile), '-bin'.concat(path.extname(barcodePrintFile))));
    const db = useLocalRealm();
    const { error: noInputFileExists } = useToaster(() => `No input file exists.`);
    // const { success: processed } = useToaster((count: number) => `Processed (${count.toFixed(0)}) records.`);
    const { success: processedByType } = useToaster((total: number, inserted: number, modified: number) => `Inserted: (${inserted.toFixed(0)}). Modified: (${modified.toFixed(0)}). Unchanged: (${(total - modified).toFixed(0)}).`);
    const { msg: begin } = useToaster((txt: string) => `Beginning import of ${txt}.`);
    const runTaxonomy = useCallback(() => {
        if (!fs.existsSync(taxonomy)) {
            return noInputFileExists();
        }
        begin('Taxonomy');
        const total = db.objects('mercariTaxonomy').length;
        let modified = 0,
            inserted = 0;
        const data = JSON.parse(fs.readFileSync(taxonomy).toString()) as { category: { name: string; selector: string }; subCategory: { name: string; selector: string }; subSubCategory: { name: string; selector: string } }[];
        const func = () => {
            for (const { category, subCategory, subSubCategory } of data) {
                const objs = db.objects<IMercariTaxonomy>('mercariTaxonomy').filtered('category.selector == $0 && subCategory.selector == $1 && subSubCategory.selector == $2', category.selector, subCategory.selector, subSubCategory.selector);
                if (objs.length === 0) {
                    const item = db.create<IMercariTaxonomy>('mercariTaxonomy', {
                        _id: new BSON.ObjectId(),
                        category: { ...category, hashTags: [] as any },
                        subCategory: { ...subCategory, hashTags: [] as any },
                        subSubCategory: { ...subSubCategory, hashTags: [] as any },
                        hashTags: [] as any,
                        timestamp: new Date(Date.now())
                    });
                    MercariTaxonomy.update(item);
                    inserted++;
                } else {
                    objs[0].timestamp = new Date(Date.now());
                    modified++;
                }
            }
        };
        runTransaction(db, func);
        processedByType(total, inserted, modified);
        const ctime = new Date(Date.now());
        const dateText = [ctime.getMonth().toFixed(0).padStart(2, '0'), ctime.getDate().toFixed(0).padStart(2, '0'), ctime.getFullYear().toString()].join('-');
        fs.renameSync(
            taxonomy,
            getAppConfigPathed(
                taxonomy
                    .split('\\')
                    .reverse()[0]
                    .replaceAll(path.extname(taxonomy), '-completed-'.concat(dateText.concat(path.extname(taxonomy))))
            )
        );
    }, [begin, db, noInputFileExists, processedByType, taxonomy]);
    const runBrands = useCallback(() => {
        if (!fs.existsSync(brands)) {
            return noInputFileExists();
        }
        begin('Brands');
        const total = db.objects('mercariBrand').length;
        let modified = 0,
            inserted = 0;
        const data = JSON.parse(fs.readFileSync(brands).toString()) as string[];
        const func = () => {
            for (const b of data) {
                const objs = db.objects<IMercariBrand>('mercariBrand').filtered('name ==[c] $0', b);
                if (objs.length === 0) {
                    db.create<IMercariBrand>('mercariBrand', { _id: new BSON.ObjectId(), name: b, timestamp: new Date(Date.now()) });
                    inserted++;
                } else {
                    objs[0].timestamp = new Date(Date.now());
                    modified++;
                }
            }
        };
        runTransaction(db, func);
        processedByType(total, inserted, modified);
        const ctime = new Date(Date.now());
        const dateText = [ctime.getMonth().toFixed(0).padStart(2, '0'), ctime.getDate().toFixed(0).padStart(2, '0'), ctime.getFullYear().toString()].join('-');
        fs.renameSync(
            brands,
            getAppConfigPathed(
                brands
                    .split('\\')
                    .reverse()[0]
                    .replaceAll(path.extname(brands), '-completed-'.concat(dateText.concat(path.extname(brands))))
            )
        );
    }, [begin, brands, db, noInputFileExists, processedByType]);

    const runHashTags = useCallback(() => {
        if (!fs.existsSync(hashtags)) {
            return noInputFileExists();
        }
        begin('Hash Tag');
        const data = JSON.parse(fs.readFileSync(hashtags).toString()) as HashTagImport[];
        let modified = 0,
            inserted = 0;
        const total = db.objects('hashTag').length;
        const func = () => {
            data.forEach(({ count, from, name }) => {
                const objs = db.objects<IHashTag>('hashTag').filtered('name ==[c] $0', name);
                if (objs.length === 0) {
                    db.create<IHashTag>('hashTag', { name, _id: new BSON.ObjectId(), usage: [{ count, from: new Date(from) }] });
                    inserted++;
                } else {
                    const obj = objs[0];
                    console.info(`obj`, obj);
                    const maxCount = obj.maxCount;
                    const mostRecent = obj.mostRecent;
                    const $maxCount = obj.usage.find((x) => x.count === maxCount);
                    const $mostRecent = obj.usage.find((x) => x.from === mostRecent && $maxCount?.from !== x.from);
                    console.log(maxCount, mostRecent, $maxCount, $mostRecent);
                    // obj.usage.map((x, ix) => [ix, x] as [number, IHashTagUsage]).filter(x => x[1] !== $mostRecent && x[1] !== $maxCount).map(x => x[0]).reverse().forEach(x => obj.usage.remove(x));
                    obj.usage.push({ count, from: new Date(from) });
                    modified++;
                }
            });
        };
        runTransaction(db, func);
        processedByType(total, inserted, modified);
        const ctime = new Date(Date.now());
        const dateText = [ctime.getMonth().toFixed(0).padStart(2, '0'), ctime.getDate().toFixed(0).padStart(2, '0'), ctime.getFullYear().toString()].join('-');
        fs.renameSync(
            hashtags,
            getAppConfigPathed(
                hashtags
                    .split('\\')
                    .reverse()[0]
                    .replaceAll(path.extname(hashtags), '-completed-'.concat(dateText.concat(path.extname(hashtags))))
            )
        );
    }, [begin, db, hashtags, noInputFileExists, processedByType]);
    const fileNoExist = useCallback((name: string) => !fs.existsSync(name), []);
    const hasSkuToExport = useCallback(
        () =>
            db
                .objects<IBarcode>('barcode')
                .filtered('beenPrinted == $0', false)
                .map((x) => x.kind === 'sku').length === 0,
        [db]
    );
    const exportSkuBarcodes = useCallback(() => {
        const bcs = db
            .objects<IBarcode>('barcode')
            .filtered('beenPrinted == $0', false)
            .filter((x) => x.kind === 'sku');
        const lines = bcs.map((bc) => [surroundQuotesNoIgnore(bc.scanValue ?? ''), surroundQuotesNoIgnore(bc.linkedSkus[0]?.product?.brand?.name ?? '-'), surroundQuotesNoIgnore(bc.linkedSkus[0]?.getTitle ?? '')]).join(',');
        const data = [['UPC', 'Brand', 'Description'].map(surroundQuotesIgnore).join(','), ...lines].join('\n');
        const outputfile = [downloads, skuToPrint.split('\\').reverse()[0]].join('\\');
        fs.writeFileSync(outputfile, data);
        fs.writeFileSync(skuToPrint, data);
        const func = () => {
            bcs.forEach((bc) => {
                bc.beenPrinted = true;
            });
        };
        runTransaction(db, func);
        cp.spawnSync('bash', [`./toxlsx.sh`, `${outputfile.split('\\').reverse()[0]}`, `${outputfile.split('\\').reverse()[0].replaceAll('.csv', '.xlsx')}`], { cwd: 'C:/Users/bobby/Downloads/' });
    }, [db, skuToPrint]);
    const hasBinToExport = useCallback(
        () =>
            db
                .objects<IBarcode>('barcode')
                .filtered('beenPrinted == $0', false)
                .map((x) => x.kind === 'bin').length === 0,
        [db]
    );
    const exportBinBarcodes = useCallback(() => {
        const bcs = db
            .objects<IBarcode>('barcode')
            .filtered('beenPrinted == $0', false)
            .filter((x) => x.kind === 'bin');
        const lines = bcs.map((bc) => [surroundQuotesNoIgnore(bc.scanValue ?? ''), surroundQuotesNoIgnore(bc.linkedBin[0].name ?? '-'), surroundQuotesNoIgnore(bc.linkedBin[0].notes ?? '')]).join(',');
        const data = [['UPC', 'Name', 'Notes'].map(surroundQuotesIgnore).join(','), ...lines].join('\n');
        const outputfile = [downloads, binToPrint.split('\\').reverse()[0]].join('\\');
        fs.writeFileSync(outputfile, data);
        fs.writeFileSync(binToPrint, data);
        const func = () => {
            bcs.forEach((bc) => {
                bc.beenPrinted = true;
            });
        };
        runTransaction(db, func);
        cp.spawnSync('bash', [`./toxlsx.sh`, `${outputfile.split('\\').reverse()[0]}`, `${outputfile.split('\\').reverse()[0].replaceAll('.csv', '.xlsx')}`], { cwd: 'C:/Users/bobby/Downloads/' });
    }, [db, binToPrint]);
    const modalOpen = useMemo(() => progressValue != null, [progressValue]);
    return (
        <RootCategoryMenuItem header='Actions' direction='down'>
            <Dialog fullWidth maxWidth='sm' open={modalOpen} onClose={ignore}>
                <DialogTitle>Progress</DialogTitle>
                <DialogContent>
                    <LinearProgress variant='determinate' value={progressValue} color='error' />
                </DialogContent>
            </Dialog>
            <MenuList dense>
                <CategoryMenuItem direction='right' Component={MenuItem} label='Admin'>
                    <MenuList dense>
                        <BaseMenuItem label='Run Brands' onClick={runBrands} disabled={fileNoExist(brands)} />
                        <BaseMenuItem label='Run HashTags' onClick={runHashTags} disabled={fileNoExist(hashtags)} />
                        <BaseMenuItem label='Run Taxonomy' onClick={runTaxonomy} disabled={fileNoExist(taxonomy)} />
                        <Divider />
                        <BaseMenuItem label='Print SKU Labels' onClick={exportSkuBarcodes} disabled={hasSkuToExport()} />
                        <BaseMenuItem label='Print Bin Labels' onClick={exportBinBarcodes} disabled={hasBinToExport()} />
                    </MenuList>
                </CategoryMenuItem>
            </MenuList>
        </RootCategoryMenuItem>
    );
}
export function MainMenu(props: { toggleProgress: () => void; setProgressValue: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <List component='nav' className='grid grid-cols-4'>
            <RootCategoryMenuItem header='Data' direction='down'>
                <MenuList dense>
                    <CategoryMenuItem direction='right' Component={MenuItem} label='Auctions'>
                        <MenuList dense>
                            <MainMenuItem baseUrl='/data/v1/' segment='selfStorage' />
                            <MainMenuItem baseUrl='/data/v1/' segment='facility' />
                            <MainMenuItem baseUrl='/data/v1/' segment='auction' />
                        </MenuList>
                    </CategoryMenuItem>
                    <CategoryMenuItem direction='right' Component={MenuItem} label='Mercari'>
                        <MenuList dense>
                            <MainMenuItem baseUrl='/data/v1/' segment='hashTag' />
                            <MainMenuItem baseUrl='/data/v1/' segment='mercariBrand' />
                            <MainMenuItem baseUrl='/data/v1/' segment='mercariTaxonomy' />
                        </MenuList>
                    </CategoryMenuItem>
                    <CategoryMenuItem direction='right' Component={MenuItem} label='Inventory'>
                        <MenuList dense>
                            <MainMenuItem baseUrl='/data/v1/' segment='bin' />
                            <MainMenuItem baseUrl='/data/v1/' segment='barcode' />
                        </MenuList>
                    </CategoryMenuItem>
                    <CategoryMenuItem direction='right' Component={MenuItem} label='Products'>
                        <MenuList dense>
                            <MainMenuItem baseUrl='/data/v1/' segment='brand' />
                            <MainMenuItem baseUrl='/data/v1/' segment='classifier' />
                            <MainMenuItem baseUrl='/data/v1/' segment='product' />
                            <MainMenuItem baseUrl='/data/v1/' segment='productImage' />
                            <MainMenuItem baseUrl='/data/v1/' segment='sku' />
                        </MenuList>
                    </CategoryMenuItem>
                </MenuList>
            </RootCategoryMenuItem>
            <MainMenu2 />
            <Actions {...props} />
        </List>
    );
}

import { useCallback } from 'react';
import { IRabbitMQContext } from './RabbitMQContext';
import { ipcRenderer } from 'electron';

export function useProvideRabbitMQContext(): IRabbitMQContext {
    const fileSystemChange = useCallback((type: FileSystemActions['type'], origin: string, destination?: string) => {
        ipcRenderer.invoke('fileSystemChange', type, origin, destination);
    }, []);
    // const { AMQP, DOWNLOADS_FOLDER, BARCODE_PRINT_FILE } = useEnv();
    // console.info(`AMQP`, amqp);
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const { pendingBarcodesCSV, inbound, root, downloads } = useFileSystem();
    // const [connection, setConnection] = useState<amqp.Connection | undefined>(undefined);
    // const [generateSKUChannel, setGenerateSKUChannel] = useState<amqp.Channel | undefined>(undefined);
    // const [generateBinChannel, setGenerateBinChannel] = useState<amqp.Channel | undefined>(undefined);
    // const [barcodePrintChannel, setBarcodePrintChannel] = useState<amqp.Channel | undefined>(undefined);
    // const [fileSystemChangeChannel, setFileSystemChangeChannel] = useState<amqp.Channel | undefined>(undefined);
    // const [imageReviewPipelineChannel, setImageReviewPipelineChannel] = useState<amqp.Channel | undefined>(undefined);
    // useEffect(() => {
    //     amqp.connect(AMQP).then(setConnection);
    // }, [AMQP]);
    // useEffect(() => {
    //     connection?.createChannel().then(setGenerateSKUChannel);
    //     connection?.createChannel().then(setGenerateBinChannel);
    //     connection?.createChannel().then(setBarcodePrintChannel);
    //     connection?.createChannel().then(setFileSystemChangeChannel);
    //     connection?.createChannel().then(setImageReviewPipelineChannel);
    // }, [connection]);
    // const db = useLocalRealm();
    // const {
    //     barcodes: { incrementBin, incrementSku }
    // } = useProvideLocalForage();
    // const afterBarcodeCreation = useCallback(
    //     async ({ bin, sku }: { bin?: IBin; sku?: ISku; }) => {
    //         const channel = await connection?.createChannel();
    //         const msg: { id: string; collection: 'sku' | 'bin'; } = { collection: bin != null ? 'bin' : 'sku', id: bin != null ? bin?._id?.toHexString() : sku?._id.toHexString() ?? '' };
    //         channel?.sendToQueue($barcodePrintQueue, Buffer.from(JSON.stringify(msg)));
    //     },
    //     [connection]
    // );
    // const photoNeedsCropping = useCallback((image: IProductImage, toCrop = false) => {
    // }, []);
    // const updateDisposition = useCallback((sku: IProductImage, adv = false) => {
    //     const func = () => {
    //     };
    // }, []);
    // const onFileInputChanged = useCallback((sku: ISku, file: File) => {
    // }, []);

    // useEffect(() => {
    //     const func = async () => {
    //         await generateSKUChannel?.assertQueue($pullNextSkuQueue, { durable: true });
    //         await generateBinChannel?.assertQueue($pullNextBinQueue, { durable: true });
    //         await barcodePrintChannel?.assertQueue($barcodePrintQueue, { durable: true });
    //         await fileSystemChangeChannel?.assertQueue($fileSystemChangeQueue, { durable: true, exclusive: true });
    //         await fileSystemChangeChannel?.consume($fileSystemChangeQueue, async (msg: amqp.ConsumeMessage | null) => {
    //             if (msg == null) throw new Error('no msg');
    //             const action = JSON.parse(msg?.content.toString() ?? '') as FileSystemActions;
    //             const { type, origin } = action;
    //             async function inner() {
    //                 switch (type) {
    //                     case 'delete':
    //                         fs.rmSync(origin);
    //                         return;
    //                     case 'create': {
    //                         const folders = path.dirname(origin.replaceAll('\\', '/'));
    //                         console.log(folders);
    //                         const checked = await checkFolder(folders);
    //                         if (!checked) throw new Error('no checked');
    //                         fs.mkdirSync(origin);
    //                         return;
    //                     }
    //                     case 'remove':
    //                         fs.rmdirSync(origin);
    //                         return;
    //                     case 'move': {
    //                         const { origin, destination } = action;
    //                         fs.renameSync(origin, destination);
    //                         return;
    //                     }
    //                     case 'copy': {
    //                         const { origin, destination } = action;
    //                         fs.copyFileSync(origin, destination);
    //                         return;
    //                     }
    //                     case 'rename': {
    //                         const { origin, destination } = action;
    //                         fs.renameSync(origin, destination);
    //                         return;
    //                     }
    //                 }
    //             }
    //             inner();
    //             fileSystemChangeChannel.ack(msg);
    //         });
    //         barcodePrintChannel?.consume($barcodePrintQueue, async (msg: amqp.ConsumeMessage | null) => {
    //             const outputFileFullPath = [DOWNLOADS_FOLDER, BARCODE_PRINT_FILE].join('\\');
    //             if (msg == null) throw new Error('no msg to read');
    //             const { id, collection } = JSON.parse(msg?.content.toString()) as { id: string; collection: 'sku' | 'bin'; };
    //             const _id = new BSON.ObjectId(id);
    //             if (collection === 'sku') {
    //                 const sku = db.objectForPrimaryKey<ISku>(collection, _id);
    //                 const brand = sku?.product?.brand?.name ?? sku?.product?.brand?.mercariBrand?.name ?? '';
    //                 const title = sku?.product?.title ?? 'unknown';
    //                 const barcode = sku?.skus[0]?.scanValue ?? '000000000000';
    //                 const data = [barcode, brand, title].map((x) => surroundQuotes(x ?? '')).join(',');
    //                 if (!fs.existsSync(outputFileFullPath)) {
    //                     fs.writeFileSync(
    //                         outputFileFullPath,
    //                         ['upc', 'brandName', 'description']
    //                             .map((x) => surroundQuotes(x ?? ''))
    //                             .join(',')
    //                             .concat('\n')
    //                     );
    //                 }
    //                 fs.writeFileSync(outputFileFullPath, data.concat('\n'));
    //                 runTransaction(db, () => {
    //                     db.create('barcode', { ...sku?.skus[0], beenPrinted: true } as IBarcode, Realm.UpdateMode.Modified);
    //                 });
    //             } else {
    //                 const bin = db.objectForPrimaryKey<IBin>(collection, _id);
    //                 const brand = bin?.name ?? '';
    //                 const notes = bin?.notes ?? '';
    //                 const barcode = bin?.barcode?.scanValue ?? '000000000000';
    //                 const data = [barcode, brand, notes].map((x) => surroundQuotes(x ?? '')).join(',');
    //                 if (!fs.existsSync(outputFileFullPath)) {
    //                     fs.writeFileSync(
    //                         outputFileFullPath,
    //                         ['upc', 'name', 'notes']
    //                             .map((x) => surroundQuotes(x ?? ''))
    //                             .join(',')
    //                             .concat('\n')
    //                     );
    //                 }
    //                 fs.writeFileSync(outputFileFullPath, data.concat('\n'));
    //                 runTransaction(db, () => {
    //                     db.create('barcode', { ...bin?.barcode, beenPrinted: true } as IBarcode, Realm.UpdateMode.Modified);
    //                 });
    //                 barcodePrintChannel.ack(msg);
    //             }
    //         });
    //         generateSKUChannel?.consume($pullNextSkuQueue, async (msg: amqp.ConsumeMessage | null) => {
    //             if (msg == null) throw new Error('no msg to read');
    //             const { collection, id, propertyName, isArray } = JSON.parse(msg?.content.toString()) as { collection: string; id: string; propertyName: string; isArray?: boolean; };
    //             const _id = new BSON.ObjectId(id);
    //             const { manufacturer, individual } = await incrementSku();
    //             const next = ['4', manufacturer.toFixed(0).padStart(5, '0'), individual.toFixed(0).padStart(5, '0')].join('');
    //             const barcode = Barcode.createFromTruncatedUPC(db, next);
    //             const obj = db.objectForPrimaryKey<MRT_RowData>(collection, _id);
    //             runTransaction(db, () => {
    //                 const result = db.create<IBin | ISku>(
    //                     collection,

    //                     { ...obj, [propertyName]: (isArray ?? false) ? [...(obj != null && propertyName in obj ? ((obj as any)[propertyName] as any[]) : []), barcode] : barcode } as any,
    //                     Realm.UpdateMode.Modified
    //                 );
    //                 generateSKUChannel.ack(msg);
    //                 afterBarcodeCreation({ bin: collection === 'bin' ? (result as IBin) : undefined, sku: collection === 'sku' ? (result as ISku) : undefined });
    //             });
    //         });
    //         generateBinChannel?.consume($pullNextBinQueue, async (msg: amqp.ConsumeMessage | null) => {
    //             if (msg == null) throw new Error('no id to pull for');
    //             const { collection, id, propertyName, isArray } = JSON.parse(msg?.content.toString()) as { collection: string; id: string; propertyName: string; isArray?: boolean; };
    //             const _id = new BSON.ObjectId(id);
    //             const { manufacturer, individual } = await incrementBin();
    //             const next = ['4', manufacturer.toFixed(0).padStart(5, '0'), individual.toFixed(0).padStart(5, '0')].join('');
    //             const barcode = Barcode.createFromTruncatedUPC(db, next);
    //             const obj = db.objectForPrimaryKey<MRT_RowData>(collection, _id);
    //             runTransaction(db, () => {
    //                 const result = db.create<IBin | ISku>(
    //                     collection,

    //                     { ...obj, [propertyName]: (isArray ?? false) ? [...(obj != null && propertyName in obj ? ((obj as any)[propertyName] as any[]) : []), barcode] : barcode } as any,
    //                     Realm.UpdateMode.Modified
    //                 );
    //                 generateBinChannel.ack(msg);
    //                 afterBarcodeCreation({ bin: collection === 'bin' ? (result as IBin) : undefined, sku: collection === 'sku' ? (result as ISku) : undefined });
    //             });
    //         });
    //     };
    //     func();
    //     return () => {
    //         generateBinChannel?.close();
    //         generateSKUChannel?.close();
    //     };
    // }, [BARCODE_PRINT_FILE, DOWNLOADS_FOLDER, afterBarcodeCreation, barcodePrintChannel, db, fileSystemChangeChannel, generateBinChannel, generateSKUChannel, incrementBin, incrementSku]);

    // const scheduleFileChange = useCallback(
    //     (type: FileSystemActions['type'], origin: string, destination?: string) => {
    //         fileSystemChangeChannel?.sendToQueue($fileSystemChangeQueue, Buffer.from(JSON.stringify(type === 'move' || type === 'rename' || type === 'copy' ? { type, origin, destination } : { type, origin })), { persistent: true });
    //     },
    //     [fileSystemChangeChannel]
    // );

    // const afterBinObjectCreation = useCallback(
    //     async (bin: IBin) => {
    //         const channel = await connection?.createChannel();
    //         const msg: { id: string; collection: string; propertyName: string; isArray?: boolean; } = { id: bin._id.toHexString(), collection: 'bin', propertyName: 'barcode', isArray: false };
    //         channel?.sendToQueue($pullNextBinQueue, Buffer.from(JSON.stringify(msg)));
    //     },
    //     [connection]
    // );
    // const afterSkuObjectCreation = useCallback(
    //     async (sku: ISku) => {
    //         const channel = await connection?.createChannel();
    //         const msg: { id: string; collection: string; propertyName: string; isArray?: boolean; } = { id: sku._id.toHexString(), collection: 'sku', propertyName: 'skus', isArray: true };
    //         channel?.sendToQueue($pullNextSkuQueue, Buffer.from(JSON.stringify(msg)));
    //     },
    //     [connection]
    // );
    const nextBinBarcode = useCallback(() => {
        return ipcRenderer.invoke('next-bin-barcode') as Promise<string>;
    }, []);
    const nextSkuBarcode = useCallback(() => {
        return ipcRenderer.invoke('next-sku-barcode') as Promise<string>;
    }, []);
    return {
        fileSystemChange,
        nextBinBarcode,
        nextSkuBarcode
    };
}

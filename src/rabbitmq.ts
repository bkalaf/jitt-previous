import amqp from 'amqplib';
import * as fs from 'graceful-fs';
import { verifyFolder } from './contexts/checkFolder';
import { calculateUPCCheckDigit } from './util/calculateUPCCheckDigit';
import { app, ipcMain } from 'electron';

const AMQP = process.env.AMQP ?? '';
let connection: amqp.Connection | undefined;
let fileChangesChannel: amqp.Channel | undefined;

const fileSystemChangeQueue = 'file-system-change-queue';

const configDir = app.getPath('appData');
console.log(configDir);
const barcodeData = [configDir, 'jitt', 'barcodes.json'].join('\\');
// const {
//     sku,
//     skuLeading,
//     bin,
//     binLeading
// } = JSON.parse(fs.readFileSync(barcodeData).toString()) as {
//     sku: number;
//     skuLeading: number;
//     bin: number;
//     binLeading: number;
// };

function nextSkuConsumer(event: Electron.IpcMainInvokeEvent) {
    console.log(event);
    let {
        sku,
        skuLeading,
        // eslint-disable-next-line prefer-const
        bin,
        // eslint-disable-next-line prefer-const
        binLeading
    } = JSON.parse(fs.readFileSync(barcodeData).toString()) as {
        sku: number;
        skuLeading: number;
        bin: number;
        binLeading: number;
    };
    if (sku === 99999) {
        skuLeading = skuLeading + 1;
        sku = 0;
    } else {
        sku = sku + 1;
    }
    const output = ['4', skuLeading.toFixed(0), sku.toFixed(0).padStart(5, '0')].join('');
    const checkDigit = calculateUPCCheckDigit(output);
    const fullbarcode = [output, checkDigit].join('');
    fs.writeFileSync(
        barcodeData,
        JSON.stringify({
            sku,
            skuLeading,
            bin,
            binLeading
        })
    );
    return Promise.resolve(fullbarcode);
}
function nextBinConsumer(event: Electron.IpcMainInvokeEvent) {
    console.log(event);
    let {
        // eslint-disable-next-line prefer-const
        sku,
        // eslint-disable-next-line prefer-const
        skuLeading,
        bin,
        binLeading
    } = JSON.parse(fs.readFileSync(barcodeData).toString()) as {
        sku: number;
        skuLeading: number;
        bin: number;
        binLeading: number;
    };
    if (bin === 99999) {
        binLeading = binLeading + 1;
        bin = 0;
    } else {
        bin = bin + 1;
    }
    const output = ['4', binLeading.toFixed(0), bin.toFixed(0).padStart(5, '0')].join('');
    const checkDigit = calculateUPCCheckDigit(output);
    const fullbarcode = [output, checkDigit].join('');
    fs.writeFileSync(
        barcodeData,
        JSON.stringify({
            sku,
            skuLeading,
            bin,
            binLeading
        })
    );
    return Promise.resolve(fullbarcode);
}

function fileSystemChangeConsumer(msg: amqp.ConsumeMessage | null) {
    if (msg == null) throw new Error('no message');
    const action = JSON.parse(msg.content.toString()) as FileSystemActions;
    const { type, origin } = action;
    switch (type) {
        case 'remove': {
            if (fs.existsSync(origin)) {
                fs.rmSync(origin, { force: true, recursive: true });
            }
            break;
        }
        case 'create': {
            if (!fs.existsSync(origin)) {
                verifyFolder(origin);
                fs.mkdirSync(origin);
            }
            break;
        }
        case 'delete': {
            if (fs.existsSync(origin)) {
                fs.rmSync(origin);
            }
            break;
        }
        case 'move': {
            const { destination } = action;
            if (fs.existsSync(origin)) {
                verifyFolder(destination);
                try {
                    fs.renameSync(origin, destination);
                } catch (error) {
                    fs.copyFileSync(origin, destination);
                    fs.rmSync(origin);
                }
            }
            break;
        }
        case 'copy': {
            const { destination } = action;
            if (fs.existsSync(origin)) {
                verifyFolder(destination);
                fs.copyFileSync(origin, destination);
            }
            break;
        }
        case 'rename': {
            const { destination } = action;
            if (fs.existsSync(origin)) {
                verifyFolder(destination);
                fs.renameSync(origin, destination);
            }
            break;
        }
    }
    if (fileChangesChannel == null) {
        throw new Error('cannot acknowledge');
    }
    fileChangesChannel.ack(msg);
}
async function setUp() {
    connection = await amqp.connect(AMQP);
    fileChangesChannel = await connection.createChannel();
    fileChangesChannel.assertQueue(fileSystemChangeQueue, { durable: true });
    fileChangesChannel.consume(fileSystemChangeQueue, fileSystemChangeConsumer);

    // nextBinChannel = await connection.createChannel();
    // nextBinChannel.assertQueue(nextBinBarcodeQueue, { durable: true });

    // nextSkuChannel = await connection.createChannel();
    // nextSkuChannel.assertQueue(nextSkuBarcodeQueue, { durable: true });
}

setUp();

function toBuffer(obj: any) {
    return Buffer.from(JSON.stringify(obj));
}

ipcMain.handle('fileSystemChange', async (event: Electron.IpcMainInvokeEvent, type: FileSystemActions['type'], origin: string, destination?: string) => {
    const conn = await amqp.connect(AMQP);
    const newChannel = await conn.createChannel();
    console.info(`channel created`);
    process.stdout.write('newChannel created\n');
    newChannel?.sendToQueue(
        fileSystemChangeQueue,
        toBuffer({
            type,
            origin,
            destination
        })
    );
    return Promise.resolve();
});

ipcMain.handle('next-bin-barcode', nextBinConsumer);
ipcMain.handle('next-sku-barcode', nextSkuConsumer);

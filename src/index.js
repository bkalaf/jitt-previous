"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDevToolsPath = void 0;
const electron_1 = require("electron");
const main_1 = require("@electron/remote/main");
const path = __importStar(require("path"));
const fs = __importStar(require("graceful-fs"));
require("dotenv/config");
const REACT_DEV_TOOLS_ID = 'fmkadmapgofadopljbjfkapdkoienihi';
function getDevToolsPath(id) {
    const folder = process.platform === 'linux' ? '/home/bobby/.config/google-chrome/Default/Extensions'
        : process.platform === 'win32' ? 'C:\\Users\\bobby\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions'
            : '';
    const devPath = [folder, id].join(path.sep);
    const version = fs.readdirSync(devPath)[0];
    return [devPath, version].join(path.sep);
}
exports.getDevToolsPath = getDevToolsPath;
electron_1.app.commandLine.appendSwitch('enable-features', 'WebSpeechAPI');
electron_1.app.commandLine.appendSwitch('enable-speech-dispatcher');
(0, main_1.initialize)();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let browserWindow;
if (require('electron-squirrel-startup')) {
    electron_1.app.quit();
}
const createWindow = () => {
    // Create the browser window.
    const mainWindow = new electron_1.BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
            nodeIntegration: true,
            nodeIntegrationInSubFrames: true,
            nodeIntegrationInWorker: true,
            webSecurity: false,
            contextIsolation: false,
            zoomFactor: 0.8
        }
    });
    (0, main_1.enable)(mainWindow.webContents);
    mainWindow.maximize();
    // and load the index.html of the app.
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
    browserWindow = mainWindow;
    return mainWindow;
};
electron_1.app.whenReady()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield electron_1.session.defaultSession.loadExtension(getDevToolsPath(REACT_DEV_TOOLS_ID), { allowFileAccess: true });
    console.log(result);
}))
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    const window = createWindow();
    window.webContents.openDevTools();
}));
// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.on('ready', createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
process.on('uncaughtException', (error, origin) => {
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
    console.error(origin.toString());
    process.stdout.write(error.name + '\n');
    process.stdout.write(error.message + '\n');
    process.stdout.write(error.stack + '\n');
    process.stdout.write(origin.toString() + '\n');
});
process.setUncaughtExceptionCaptureCallback((error) => {
    fs.appendFileSync('error.json', JSON.stringify(error, null, '\t'));
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
    process.stdout.write(error.name + '\n');
    process.stdout.write(error.message + '\n');
    process.stdout.write(error.stack + '\n');
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
//# sourceMappingURL=index.js.map
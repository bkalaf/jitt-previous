import { app } from '@electron/remote';

export function getAppConfigPathed(...fn: string[]) {
    return [app.getPath('appData'), 'jitt', ...fn].join('\\');
}

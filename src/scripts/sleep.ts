// import 'dotenv/config';
// import { IMercariCategory, IMercariTaxonomy } from '../types';
// import { openRealm } from './openRealm';

export function sleep(delay = 0) {
    return new Promise((resolve) => setTimeout(() => {
        // console.log('SLEEP DONE');
        resolve(undefined);
    }, delay)
    );
}

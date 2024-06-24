import { createContext } from 'react';
import { camelToKebab } from '../common/text';

export type IRabbitMQContext = {
    fileSystemChange: (type: FileSystemActions['type'], origin: string, destination?: string) => void;
    nextBinBarcode: () => Promise<string>;
    nextSkuBarcode: () => Promise<string>;
};

const $photoNeedsCroppingQueue = camelToKebab('photoNeedsCroppingQueue');
export const $pullNextSkuQueue = camelToKebab('pullNextSkuQueue');
export const $pullNextBinQueue = camelToKebab('pullNextBinQueue');
export const $barcodePrintQueue = camelToKebab('barcodePrintQueue');
const $imageReviewPipeline = camelToKebab('imageReviewPipeline');
// const $draftReviewPipeline = camelToKebab('draftApprovalPipeline');
export const $fileSystemChangeQueue = camelToKebab('fileSystemChangeQueue');

export const RabbitMQContext = createContext<IRabbitMQContext | undefined>(undefined);

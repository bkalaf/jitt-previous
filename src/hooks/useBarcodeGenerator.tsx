import { useContxt } from './useContxt';
import { BarcodeGeneratorContext } from '../contexts/BarcodeGeneratorContext';

export function useBarcodeGenerator() {
    return useContxt('BarcodeGeneratorContext', BarcodeGeneratorContext);
}

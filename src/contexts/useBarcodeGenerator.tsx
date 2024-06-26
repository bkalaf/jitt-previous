import { useContxt } from '../hooks/useContxt';
import { BarcodeGeneratorContext } from './BarcodeGeneratorContext';

export function useBarcodeGenerator() {
    return useContxt('BarcodeGeneratorContext', BarcodeGeneratorContext);
}

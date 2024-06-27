import { BarcodeGeneratorContext } from './BarcodeGeneratorContext';
import { useProvideBarcodeGeneratorContext } from '../hooks/useProvideBarcodeGeneratorContext';

export function BarcodeGeneratorProvider({ children }: { children: Children }) {
    const value = useProvideBarcodeGeneratorContext();
    return <BarcodeGeneratorContext.Provider value={value}>{children}</BarcodeGeneratorContext.Provider>;
}

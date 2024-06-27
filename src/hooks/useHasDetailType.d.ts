import { DetailTypes } from '../types';
export declare function useCheckPredicate(name: string, predicate: (x?: any) => boolean): boolean;
export declare function useCheckProperty(name: string, value: any): boolean;
export declare function useHasDetailType(name: string, item: DetailTypes | DetailTypes[]): boolean;

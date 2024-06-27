import { EnqueueSnackbar } from 'notistack';
type SnackBarProps = Exclude<Parameters<EnqueueSnackbar>[1], undefined>;
export type SnackBarProperty<T extends keyof SnackBarProps> = SnackBarProps[T];
export declare function useEnqueueSnackbar(variant: SnackBarProperty<'variant'>): <T extends any[]>(func: (...args: T) => string) => (...args: T) => import("notistack").SnackbarKey;
export {};

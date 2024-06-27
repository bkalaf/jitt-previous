export declare function useToaster<T extends any[]>(func: (...args: T) => string): {
    success: (...args: T) => import("notistack").SnackbarKey;
    error: (...args: T) => import("notistack").SnackbarKey;
    warning: (...args: T) => import("notistack").SnackbarKey;
    info: (...args: T) => import("notistack").SnackbarKey;
    msg: (...args: T) => import("notistack").SnackbarKey;
};

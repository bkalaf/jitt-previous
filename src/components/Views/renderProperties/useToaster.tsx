import { useEnqueueSnackbar } from './useEnqueueSnackbar';


export function useToaster<T extends any[]>(func: (...args: T) => string) {
    const success = useEnqueueSnackbar('success');
    const error = useEnqueueSnackbar('error');
    const warning = useEnqueueSnackbar('warning');
    const info = useEnqueueSnackbar('info');
    const msg = useEnqueueSnackbar('default');
    return {
        success: success(func),
        error: error(func),
        warning: warning(func),
        info: info(func),
        msg: msg(func)
    };
}

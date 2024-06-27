// import { useCallback } from 'react';
// import { UseMutateFunction } from '@tanstack/react-query';
// import { useSuccessNotification } from './useSuccessNotification';
// import { useFailureNotification } from './useFailureNotification';
// export function useNotification<T, U, V>(successGenerator: (x: T) => string, failureGenerator: (x: U) => string, mutate: UseMutateFunction<T, U, V, unknown>) {
//     const onSuccess = useSuccessNotification(successGenerator);
//     const onError = useFailureNotification(failureGenerator);
//     const success = useCallback(
//         (params: V) => {
//             mutate(params, {
//                 onSuccess,
//                 onError
//             });
//         },
//         [mutate, onError, onSuccess]
//     );
//     return {
//         onSuccess: success,
//         onError
//     };
// }
//# sourceMappingURL=_useNotification.js.map
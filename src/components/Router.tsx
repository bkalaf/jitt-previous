import { createHashRouter, Navigate, Outlet } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';
import { App } from './App';
import { CollectionView } from './Views/CollectionView';
import React from 'react';
import { Dashboard } from './Dashboard';

export function on(source: { addEventListener: (typeof document)['addEventListener']; removeEventListener: (typeof document)['removeEventListener'] }, event: string, listener: (event: any) => void) {
    source.addEventListener(event, listener);
    return () => source.removeEventListener(event, listener);
}

const collectionRoute = (name: string) => ({ path: name, errorElement: <ErrorBoundary />, element: <Outlet />, children: [{ index: true, element: <CollectionView />, errorElement: <ErrorBoundary /> }] });
const queryRoute = (name: string) => ({ path: name, errorElement: <ErrorBoundary />, element: <Outlet />, children: [{ index: true, element: <CollectionView />, errorElement: <ErrorBoundary /> }] });
// export const appRouter = createHashRouter([
//     {
//         path: '/',
//         element: <App />,
//         errorElement: <ErrorBoundary />,
//         children: [
//             {
//                 path: 'data',
//                 errorElement: <ErrorBoundary />,
//                 children: [
//                     {
//                         path: 'v1',
//                         errorElement: <ErrorBoundary />,
//                         children: [
//                             collectionRoute('hashTag'),
//                             collectionRoute('brand'),
//                             collectionRoute('mercariBrand'),
//                             collectionRoute('selfStorage'),
//                             collectionRoute('facility'),
//                             collectionRoute('auction'),
//                             collectionRoute('mercariTaxonomy'),
//                             collectionRoute('classifier'),
//                             { index: true, element: <div>CATEGORY INDEX</div>, errorElement: <ErrorBoundary /> }
//                         ]
//                     },
//                     { index: true, element: <Navigate to='v1' />, errorElement: <ErrorBoundary /> }
//                 ]
//             },
//             { index: true, element: <div>APP ROOT</div>, errorElement: <ErrorBoundary /> }
//         ]
//     }
// ]);

export const appRouter = (ProviderComponent: React.FunctionComponent<{ children: Children }>) =>
    createHashRouter([
        {
            path: '/',
            element: (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <ProviderComponent>
                        <App />
                    </ProviderComponent>
                </React.Suspense>
            ),
            errorElement: <ErrorBoundary />,
            children: [
                {
                    path: 'queries',
                    errorElement: <ErrorBoundary />,
                    children: [
                        { path: 'v1', errorElement: <ErrorBoundary />, children: [queryRoute('classifierHierarchy'), { index: true, element: <div>QUERY INDEX</div>, errorElement: <ErrorBoundary /> }] },
                        { index: true, errorElement: <ErrorBoundary />, element: <Navigate to='v1' /> }
                    ]
                },
                {
                    path: 'data',
                    errorElement: <ErrorBoundary />,
                    children: [
                        {
                            path: 'v1',
                            errorElement: <ErrorBoundary />,
                            children: [
                                collectionRoute('hashTag'),
                                collectionRoute('brand'),
                                collectionRoute('mercariBrand'),
                                collectionRoute('selfStorage'),
                                collectionRoute('facility'),
                                collectionRoute('auction'),
                                collectionRoute('mercariTaxonomy'),
                                collectionRoute('classifier'),
                                collectionRoute('bin'),
                                collectionRoute('barcode'),
                                collectionRoute('product'),
                                collectionRoute('productImage'),
                                collectionRoute('sku'),
                                collectionRoute('draft'),
                                collectionRoute('attachment'),
                                { index: true, element: <div>CATEGORY INDEX</div>, errorElement: <ErrorBoundary /> }
                            ]
                        },
                        { index: true, element: <Navigate to='v1' />, errorElement: <ErrorBoundary /> }
                    ]
                },
                {
                    index: true,
                    element: <Dashboard />,
                    errorElement: <ErrorBoundary />
                }
            ]
        }
    ]);


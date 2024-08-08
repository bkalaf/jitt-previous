// import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
// import { Typography } from '@mui/material';
// import { useWhyDidIUpdate } from './useWhyDidIUpdate';
// import { useMemo } from 'react';

// export function renderBottomToolbarCustomActions(totalFetched = 0, totalDBRowCount = 0) {
//     return function RenderBottomToolbarCustomActions<T extends MRT_RowData>(props: Parameters<Exclude<MRT_TableOptions<T>['renderBottomToolbarCustomActions'], undefined>>[0]) {
//         useWhyDidIUpdate('RenderBottomToolbarCustomActions', props);
//         const text = useMemo(() => `Fetched ${totalFetched.toFixed(0)} of ${totalDBRowCount.toFixed(0)} total rows.`, []);
//         return <Typography>{text}</Typography>;
//     };
// }

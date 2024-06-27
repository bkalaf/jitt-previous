// import React, { useCallback } from 'react';
// import { runTransaction } from '../../util/runTransaction';
// import { useLocalRealm } from '../../hooks/useLocalRealm';
// import { useInvalidateCollection } from '../../hooks/useInvalidateCollection';
// import { IconBtn } from '../IconBtn';
// import { faTrash } from '@fortawesome/pro-solid-svg-icons';
// import { ListItem, ListItemText } from '@mui/material';
// import { getProperty } from '../../common/object';
// import { useMutation } from '@tanstack/react-query';
// import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
// export function createListListItem(Component: React.FunctionComponent<{ data: any }>, toDelete: (index: any) => (ev: React.SyntheticEvent<HTMLButtonElement>) => void) {
//     return function ListListItem(props: { index: number | string; data: any; labelProperty?: string }) {
//         useWhyDidIUpdate('ListListItem', props);
//         const Comp: React.FunctionComponent<{ data: any }> =
//             props.labelProperty == null ?
//                 Component
//             :   function LP({ data: d }: { data: any }) {
//                     useWhyDidIUpdate('LP', { data: d });
//                     const value = getProperty(props.labelProperty ?? '', d) as string;
//                     return value;
//                 };
//         const invalidator = useInvalidateCollection();
//         const { mutate } = useMutation({
//             mutationFn: (data: { index: any; ev: React.MouseEvent<HTMLButtonElement> }) => {
//                 toDelete(data.index)(data.ev);
//                 return Promise.resolve();
//             },
//             onSuccess: () => invalidator()
//         });
//         const realm = useLocalRealm();
//         const onDeleteClick = useCallback(
//             (index: number | string) => {
//                 return (ev: React.MouseEvent<HTMLButtonElement>) => {
//                     const func = () => mutate({ index, ev });
//                     runTransaction(realm, func);
//                 };
//             },
//             [mutate, realm]
//         );
//         return (
//             <ListItem secondaryAction={<IconBtn icon={faTrash} tooltip='Delete Row' onClick={onDeleteClick(props.index)} />}>
//                 {/* <Comp data={props.data} /> */}
//                 <ListItemText primary={<Comp data={props.data.value} />} />
//             </ListItem>
//         );
//     };
// }
//# sourceMappingURL=_createListListItem.js.map
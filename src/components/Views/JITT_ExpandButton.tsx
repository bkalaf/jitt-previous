import { MRT_ColumnDef } from 'material-react-table';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { IconBtn } from '../IconBtn';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useStopAndPrevent } from '../../hooks/useStopAndPrevent';
import { faChevronDown, faChevronRight, faChevronsDown, faChevronsRight } from '@fortawesome/pro-solid-svg-icons';
import React, { useMemo } from 'react';
import { $className } from '../../util/$className';
import { IconButtonProps } from '@mui/material';
import { iconButtonDim, iconSVGDim } from './expandButtonHW';

export function expandSingleRow(p: Parameters<Exclude<MRT_ColumnDef<any, any>['Cell'], undefined>>[0]): [IconDefinition, () => (ev: any) => void, () => boolean, 'muiExpandAllButtonProps' | 'muiExpandButtonProps', string] {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return [p.row.getIsExpanded() ? faChevronRight : faChevronDown, () => (ev: any) => p.row.getToggleExpandedHandler()(), p.row.getIsExpanded, 'muiExpandButtonProps', 'this'];
}
export function expandAllRows(p: Parameters<Exclude<MRT_ColumnDef<any, any>['Cell'], undefined>>[0]): [IconDefinition, () => (ev: any) => void, () => boolean, 'muiExpandAllButtonProps' | 'muiExpandButtonProps', string] {
    return [p.table.getIsAllRowsExpanded() ? faChevronsRight : faChevronsDown, () => p.table.getToggleAllRowsExpandedHandler(), p.table.getIsAllRowsExpanded, 'muiExpandAllButtonProps', 'ALL'];
}
export function createJITTExpandButton(func: typeof expandAllRows): React.FunctionComponent<any> {
    return function JITT_ExpandButton(props: Parameters<Exclude<MRT_ColumnDef<any, any>['Cell'], undefined>>[0]) {
        useWhyDidIUpdate('TableExpandButton', props);
        const [icon, expandHandler, isExpanded, defPropertyName, tooltipCenter] = useMemo(() => func(props), [props]);
        const cellProps = props.table.options[defPropertyName] as IconButtonProps;
        const { className, ...restCellProps } = $className(cellProps, {}, 'rounded-lg text-cyan-300 bg-indigo-600 shadow shadow-inner shadow-black aria-expanded:bg-rose-600 aria-expanded:text-white');
        const tooltip = ['Expand', tooltipCenter, 'rows.'].join(' ');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onExpand = useStopAndPrevent(expandHandler());
        return <IconBtn className={className} icon={icon} tooltip={tooltip} onClick={onExpand} {...restCellProps} aria-expanded={isExpanded()} iconSize='sm' innerDim={iconSVGDim} outerDim={iconButtonDim} />;
        // return <MRT_ExpandButton {...props} classes={{ root: 'ml-0' }} />;
    };
}

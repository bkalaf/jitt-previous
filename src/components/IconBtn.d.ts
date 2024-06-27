import { IconButtonProps } from '@mui/material';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
export declare function merge<T extends Record<string, any>>(rest: T, propName: string, value: any): Omit<T, string> & {
    [x: string]: any;
};
export declare function IconBtn(props: {
    classes?: Partial<Record<'iconButton' | 'fontAwesomeIcon', string>>;
    tooltip: string;
    icon: IconDefinition;
    disabled?: boolean;
    onClick?: MouseEv<HTMLButtonElement>;
    className?: string;
    color?: IconButtonProps['color'];
    text?: string;
    iconSize?: SizeProp;
    outerDim?: string;
    innerDim?: string;
} & Partial<IconButtonProps>): import("react/jsx-runtime").JSX.Element;

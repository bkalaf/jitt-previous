import React from 'react';
export declare function CategoryMenuItem({ Component, children, direction, label }: {
    Component: (props: {
        onClick: (ev: React.MouseEvent<HTMLElement>) => void;
        children: Children;
        className: string;
    }) => React.ReactNode;
    children: React.ReactNode;
    direction: 'down' | 'right';
    label: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;

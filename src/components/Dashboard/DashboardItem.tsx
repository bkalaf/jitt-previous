import React from 'react';

export function DashboardItem({ Component, ...props }: { Component: React.FunctionComponent<{ className?: string; start?: number; }>; className?: string; start?: number; }) {
    return <React.Suspense fallback={<span>Loading...</span>}>
        <Component {...props} />
    </React.Suspense>;
}

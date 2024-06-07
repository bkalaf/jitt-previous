import { MRT_RowData } from 'material-react-table';

export function Panel<T extends MRT_RowData>(props: { Component: React.FunctionComponent<{ data: any[], original: T }>; property: string & keyof T; original: T; }) {
    const { Component, property, original } = props;
    console.info(`data`, original, property);
    const data = original[property] as any[];
    return <Component data={data} original={original} />;
}

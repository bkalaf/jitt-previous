import { MRT_RowData } from 'material-react-table';

export function Panel<T extends MRT_RowData>(props: { Component: React.FunctionComponent<{ data: any[] | T, original: T, objectType: string }>; property?: string & keyof T; original: T; objectType: string }) {
    const { Component, property, original, objectType } = props;
    console.info(`data`, original, property);
    const data = property ? original[property] : original ?? [] as any[];
    return <Component data={data} original={original} objectType={objectType} />;
}

import { MRT_RowData } from 'material-react-table';

export function Panel<T extends MRT_RowData>(props: { Component: React.FunctionComponent<{ data: any[] | T; original: T; objectType: string; isCurrent: boolean }>; property?: string & keyof T; original: T; objectType: string; isCurrent: boolean }) {
    const { Component, property, original, objectType, isCurrent } = props;
    // console.info(`data`, original, property);
    const data = property ? original[property] : original ?? ([] as any[]);
    return <Component isCurrent={isCurrent} data={data} original={original} objectType={objectType} />;
}

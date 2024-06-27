import { IProduct } from '../types';
import { Realm } from 'realm';
export declare function convertProduct(product: IProduct & Realm.Object<IProduct>): any;
export declare function ProductDetailsTab(props: {
    original: IProduct;
    objectType: string;
}): import("react/jsx-runtime").JSX.Element;

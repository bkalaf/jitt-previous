/// <reference types="src/global" />
import { Shippers } from '.';
export type ShippingCategory = 'standard' | 'media-mail';
export type IShippingRate = {
    category: ShippingCategory;
    weight: number;
    carrier: Shippers;
    id: number;
    price: number;
};
export declare function sortShippingRate(rates: IShippingRate[]): {
    standard: Record<string, IShippingRate[]>;
    "media-mail": Record<string, IShippingRate[]>;
};
export declare function getLowestShippingRate(result: ReturnType<typeof sortShippingRate>): {
    'media-mail': {
        min: number;
        max: number;
        price: number;
        carrier: Shippers;
        id: number;
        multiple: boolean;
    }[];
    standard: {
        min: number;
        max: number;
        price: number;
        carrier: Shippers;
        id: number;
        multiple: boolean;
    }[];
};
export declare function getShipping(weight: number, isMediaMail?: boolean): {
    min: number;
    max: number;
    price: number;
    carrier: Shippers;
    id: number;
    multiple: boolean;
} | undefined;
export declare function getShippingById(key?: number): IShippingRate | undefined;
export declare const CURRENT_SHIPPING_VERSION = 1;

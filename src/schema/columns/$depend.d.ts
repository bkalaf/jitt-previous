import { MRT_RowData } from 'material-react-table';
import { IProduct } from '../../types';
export declare const $depend: {
    notZeroOrNull: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal?: boolean) => IDependency<T, TKey>;
    notNilOrEmpty: <T_1 extends MRT_RowData, TKey_1 extends keyof T_1>(property: TKey_1, isLocal?: boolean) => IDependency<T_1, TKey_1>;
    isZeroOrNull: <T_2 extends MRT_RowData, TKey_2 extends keyof T_2>(property: TKey_2, isLocal?: boolean) => IDependency<T_2, TKey_2>;
    isTrue: <T_3 extends MRT_RowData, TKey_3 extends keyof T_3>(property: TKey_3, isLocal?: boolean) => IDependency<T_3, TKey_3>;
    isFalse: <T_4 extends MRT_RowData, TKey_4 extends keyof T_4>(property: TKey_4, isLocal?: boolean) => IDependency<T_4, TKey_4>;
    equalTo: <T_5 extends MRT_RowData, TKey_5 extends keyof T_5>(property: TKey_5, equalTo: T_5[TKey_5], isLocal?: boolean) => IDependency<T_5, TKey_5>;
    notEqualTo: <T_6 extends MRT_RowData, TKey_6 extends keyof T_6>(property: TKey_6, equalTo: T_6[TKey_6], isLocal?: boolean) => IDependency<T_6, TKey_6>;
    in: <T_7 extends MRT_RowData, TKey_7 extends keyof T_7, TValue extends T_7[TKey_7] = T_7[TKey_7]>(property: TKey_7, isLocal?: boolean) => (...values: TValue[]) => IDependency<T_7, TKey_7>;
    hasOneOf: <T_8 extends MRT_RowData, TKey_8 extends keyof T_8 = keyof T_8, TValue_1 extends T_8[TKey_8] = T_8[TKey_8]>(property: TKey_8, isLocal?: boolean) => (...values: ArrayOf<TValue_1>[]) => IDependency<T_8, TKey_8>;
    notIn: <T_9 extends MRT_RowData, TKey_9 extends keyof T_9>(property: TKey_9, isLocal?: boolean) => (...values: T_9[TKey_9][]) => IDependency<T_9, TKey_9>;
};
export declare const $hasDetailType: {
    apparel: {
        (): IDependency<IProduct, "detailTypes">;
        tops: () => IDependency<IProduct, "detailTypes">;
        bottoms: {
            (): IDependency<IProduct, "detailTypes">;
            legged: () => IDependency<IProduct, "detailTypes">;
        };
        bras: {
            (): IDependency<IProduct, "detailTypes">;
            swimsuit: () => IDependency<IProduct, "detailTypes">;
        };
        footwear: () => IDependency<IProduct, "detailTypes">;
    };
    cables: {
        (): IDependency<IProduct, "detailTypes">;
        data: () => IDependency<IProduct, "detailTypes">;
        power: () => IDependency<IProduct, "detailTypes">;
        video: () => IDependency<IProduct, "detailTypes">;
    };
    electronics: {
        (): IDependency<IProduct, "detailTypes">;
        kitchenAppliances: () => IDependency<IProduct, "detailTypes">;
        visual: {
            (): IDependency<IProduct, "detailTypes">;
            cellPhones: () => IDependency<IProduct, "detailTypes">;
        };
        computerComponents: {
            (): IDependency<IProduct, "detailTypes">;
            ram: () => IDependency<IProduct, "detailTypes">;
            drives: () => IDependency<IProduct, "detailTypes">;
            battery: () => IDependency<IProduct, "detailTypes">;
        };
    };
    homeGoods: {
        (): IDependency<IProduct, "detailTypes">;
        decor: {
            (): IDependency<IProduct, "detailTypes">;
            wallArt: () => IDependency<IProduct, "detailTypes">;
        };
        dinnerware: () => IDependency<IProduct, "detailTypes">;
        flatware: () => IDependency<IProduct, "detailTypes">;
        glassware: () => IDependency<IProduct, "detailTypes">;
    };
    media: {
        (): IDependency<IProduct, "detailTypes">;
        books: () => IDependency<IProduct, "detailTypes">;
        music: () => IDependency<IProduct, "detailTypes">;
        videoGames: () => IDependency<IProduct, "detailTypes">;
        videos: {
            (): IDependency<IProduct, "detailTypes">;
            tvSeries: () => IDependency<IProduct, "detailTypes">;
            film: () => IDependency<IProduct, "detailTypes">;
        };
    };
    sportingGoods: {
        (): IDependency<IProduct, "detailTypes">;
        golf: {
            (): IDependency<IProduct, "detailTypes">;
            clubs: () => IDependency<IProduct, "detailTypes">;
        };
        tennis: {
            (): IDependency<IProduct, "detailTypes">;
            rackets: () => IDependency<IProduct, "detailTypes">;
        };
        bowling: {
            (): IDependency<IProduct, "detailTypes">;
            balls: () => IDependency<IProduct, "detailTypes">;
        };
    };
    jewelry: {
        (): IDependency<IProduct, "detailTypes">;
        costume: () => IDependency<IProduct, "detailTypes">;
        preciousMetal: () => IDependency<IProduct, "detailTypes">;
    };
    toys: {
        (): IDependency<IProduct, "detailTypes">;
        boardGames: () => IDependency<IProduct, "detailTypes">;
    };
};
export declare const $productInfo: {
    gender: {
        womens: IDependency<IProduct, "gender">;
        mens: IDependency<IProduct, "gender">;
        adult: IDependency<MRT_RowData, "gender">;
        boys: IDependency<IProduct, "gender">;
        girls: IDependency<IProduct, "gender">;
        youth: IDependency<MRT_RowData, "gender">;
        male: IDependency<MRT_RowData, "gender">;
        female: IDependency<MRT_RowData, "gender">;
    };
    shoeHeelType: {
        notNull: IDependency<IProduct, "shoeHeelType">;
    };
    cableType: {
        data: IDependency<IProduct, "cableType">;
        power: IDependency<IProduct, "cableType">;
        video: IDependency<IProduct, "cableType">;
    };
};

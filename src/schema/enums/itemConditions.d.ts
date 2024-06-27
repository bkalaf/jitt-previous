export declare const _itemConditions: {
    new: {
        key: string;
        text: string;
        selector: string;
        color: string;
    };
    'like-new': {
        key: string;
        text: string;
        selector: string;
        color: string;
        aliases: string[];
    };
    good: {
        key: string;
        text: string;
        selector: string;
        color: string;
    };
    fair: {
        key: string;
        text: string;
        selector: string;
        color: string;
    };
    poor: {
        key: string;
        text: string;
        selector: string;
        color: string;
    };
    parts: {
        key: string;
        text: string;
        selector: string;
        color: string;
    };
};
export declare const itemConditions: {
    getText: (key: "new" | "like-new" | "good" | "fair" | "poor" | "parts") => string;
    getColor: (key: "new" | "like-new" | "good" | "fair" | "poor" | "parts") => string;
    getSelector: (key: "new" | "like-new" | "good" | "fair" | "poor" | "parts") => string;
};
export declare const ItemConditionsMap: {
    [k: string]: string;
};

/// <reference types="react" />
export type IForagerContext = {
    forager: LocalForage;
};
export declare const ForagerContext: import("react").Context<IForagerContext | undefined>;
export declare function useForager(): IForagerContext;
export declare function useProvideForagerContext(): {
    forager: LocalForage;
};

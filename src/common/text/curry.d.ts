export declare function curry<TFunc extends (...args: any[]) => any>(func: TFunc): (x: Parameters<TFunc>[0]) => ((...args: Tail<Parameters<TFunc>>) => ReturnType<TFunc>);

import React from 'react';
export declare function useStopAndPrevent<TElement extends HTMLElement, TEvent extends Event, TSynthentic extends React.SyntheticEvent<TElement, TEvent>>(func: (ev: TSynthentic) => void): (ev: TSynthentic) => void;

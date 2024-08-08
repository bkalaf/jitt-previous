import { useElementEventHandler } from './useElementEventHandler';

export function useFormResetSubmitEvent<TResetArgs extends any[] = never[], TSubmitArgs extends any[] = never[], TSubmitResult = void>(
    reset: (...args: TResetArgs) => (ev: React.SyntheticEvent<HTMLFormElement, Event>) => void,
    submit: (...args: TSubmitArgs) => (ev: React.SyntheticEvent<HTMLFormElement, Event>) => TSubmitResult | Promise<TSubmitResult>
) {
    const onReset = useElementEventHandler<Event, HTMLFormElement, React.SyntheticEvent<HTMLFormElement, Event>, TResetArgs>((...args: TResetArgs) => reset(...args), true, true);
    const onSubmit = useElementEventHandler<Event, HTMLFormElement, React.SyntheticEvent<HTMLFormElement, Event>, TSubmitArgs>((...args: TSubmitArgs) => submit(...args), true, true);
    return {
        onSubmit,
        onReset
    };
}

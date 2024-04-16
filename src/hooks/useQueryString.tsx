import { useLocation, useSearchParams } from 'react-router-dom';

export function useQueryString<K extends string>() {
    const { search } = useLocation();
    const [searchParams] = useSearchParams(search);
    console.info(`searchParams`, Object.fromEntries(searchParams.entries()));
    return searchParams as Record<K, string | undefined>;
}

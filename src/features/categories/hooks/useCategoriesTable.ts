import { Filter } from "@/shared/types/filter";
import { CategoryStatus } from "@/shared/types/status";
import { useCallback, useState } from "react";
import { GetCategoriesRequestDto } from "../apis/categories.dto";

export interface CategoryTableState extends Filter {
    status?: CategoryStatus
}

export function useCategoriesTable() {
    const [state, setState] = useState<CategoryTableState>({
        keyword: '',
        page: 0,
        size: 10, 
        status: undefined,
        sortBy: 'createdAt',
        asc: false
    });

    const setKeyword = useCallback((keyword: string) => {
        setState((prev) => ({...prev, keyword, page: 0}));
    }, []);

    const setPage = useCallback((page: number) => {
        setState((prev) => ({...prev, page}));
    }, []);

    const setSize = useCallback((size: number) => {
        setState((prev) => ({...prev, size}));
    }, []);

    const setStatus = useCallback((status: CategoryStatus | undefined) => {
        setState((prev) => ({...prev, status, page: 0}))
    }, []);

    const setSortBy = useCallback((sortBy: string) => {
        setState((prev) => ({...prev, sortBy}))
    }, []);

    const setAsc = useCallback((asc: boolean) => {
        setState((prev) => ({...prev, asc}))
    }, []);

    const getQueryParams = useCallback((): GetCategoriesRequestDto => {
        return {
            keyword: state.keyword || undefined,
            page: state.page,
            size: state.size,
            status: state.status,
            sortBy: state.sortBy,
            asc: state.asc
        }
    }, [state]);

    return {state, setKeyword, setPage, setSize, setStatus, setSortBy, setAsc, getQueryParams};
}
import { useState, useCallback } from 'react';
import { CategoryListParams, CategoryStatus } from '../model/category.model';

export interface CategoryTableState {
  keyword: string;
  page: number;
  size: number;
  status?: CategoryStatus;
}

export function useCategoryTable() {
  const [state, setState] = useState<CategoryTableState>({
    keyword: '',
    page: 0,
    size: 10,
    status: undefined,
  });

  const setKeyword = useCallback((keyword: string) => {
    setState((prev) => ({ ...prev, keyword, page: 0 }));
  }, []);

  const setPage = useCallback((page: number) => {
    setState((prev) => ({ ...prev, page }));
  }, []);

  const setSize = useCallback((size: number) => {
    setState((prev) => ({ ...prev, size, page: 0 }));
  }, []);

  const setStatus = useCallback((status: CategoryStatus | undefined) => {
    setState((prev) => ({ ...prev, status, page: 0 }));
  }, []);

  const getQueryParams = useCallback((): CategoryListParams => {
    return {
      keyword: state.keyword || undefined,
      page: state.page,
      size: state.size,
      status: state.status,
    };
  }, [state]);

  return { state, setKeyword, setPage, setSize, setStatus, getQueryParams };
}
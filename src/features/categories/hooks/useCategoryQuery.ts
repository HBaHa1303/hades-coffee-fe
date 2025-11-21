import { useQuery } from '@tanstack/react-query';
import { categoryService } from '../services/category.service';
import { CategoryListParams } from '../model/category.model';

export const CATEGORY_QUERY_KEYS = {
  all: ['categories'] as const,
  lists: () => [...CATEGORY_QUERY_KEYS.all, 'list'] as const,
  list: (params: CategoryListParams) => [...CATEGORY_QUERY_KEYS.lists(), params] as const,
  details: () => [...CATEGORY_QUERY_KEYS.all, 'detail'] as const,
  detail: (id: number) => [...CATEGORY_QUERY_KEYS.details(), id] as const,
};

export function useCategoryList(params: CategoryListParams) {
  return useQuery({
    queryKey: CATEGORY_QUERY_KEYS.list(params),
    queryFn: () => categoryService.getList(params),
  });
}

export function useCategoryDetail(id: number | null) {
  return useQuery({
    queryKey: CATEGORY_QUERY_KEYS.detail(id || 0),
    queryFn: () => categoryService.getById(id!),
    enabled: id !== null,
  });
}
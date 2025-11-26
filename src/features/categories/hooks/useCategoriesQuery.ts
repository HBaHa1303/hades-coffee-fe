import { useQuery } from "@tanstack/react-query";
import { categoriesService } from "../services/categories.service";
import { GetCategoriesRequestDto } from "../apis/categories.dto";

export const CATEGORY_QUERY_KEYS = {
    all: ['categories'] as const,
    lists: () => [...CATEGORY_QUERY_KEYS.all, 'list'] as const,
    list: (params: GetCategoriesRequestDto) => [...CATEGORY_QUERY_KEYS.lists(), params] as const,
    details: () => [...CATEGORY_QUERY_KEYS.all, 'detail'] as const,
    detail: (id: number) => [...CATEGORY_QUERY_KEYS.details(), id] as const
};

export function useCategories(params: GetCategoriesRequestDto) {
    return useQuery({
        queryKey: CATEGORY_QUERY_KEYS.list(params),
        queryFn: () => categoriesService.getList(params)
    });
}

export function useCategoryById(id: number) {
    return useQuery({
        queryKey: CATEGORY_QUERY_KEYS.detail(id),
        queryFn: () => categoriesService.getById(id), 
        enabled: id != null
    });
}
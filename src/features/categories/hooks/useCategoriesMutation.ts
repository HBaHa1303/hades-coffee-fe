import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeCategoryStatusRequestDto, CreateCategoryRequestDto, UpdateCategoryRequestDto } from "../apis/categories.dto";
import { categoriesService } from "../services/categories.service";
import { CATEGORY_QUERY_KEYS } from "./useCategoriesQuery";

export function useCreateCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: CreateCategoryRequestDto) => categoriesService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: CATEGORY_QUERY_KEYS.lists()})
        }
    })
}

export function useUpdateCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({id, data} : {id: number, data: UpdateCategoryRequestDto}) => categoriesService.update(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({queryKey: CATEGORY_QUERY_KEYS.lists()});
            queryClient.invalidateQueries({queryKey: CATEGORY_QUERY_KEYS.detail(variables.id)})
        }
    });
}

export function useChangeStatusCategory() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({id, data}: {id: number, data: ChangeCategoryStatusRequestDto}) => categoriesService.updateStatus(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: CATEGORY_QUERY_KEYS.lists()})
        }
    });
}

export function useDeleteCategory() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => categoriesService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: CATEGORY_QUERY_KEYS.lists()})
        }
    });
}
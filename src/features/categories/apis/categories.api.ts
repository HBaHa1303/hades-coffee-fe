import { axiosPrivate } from "@/libs/axios/axios-instance";
import { CategoryResponseDto, ChangeCategoryStatusRequestDto, CreateCategoryRequestDto, GetCategoriesRequestDto, UpdateCategoryRequestDto } from "./categories.dto";
import { ApiResponse } from "@/shared/types/response";

const BASE_URL = '/private/api/v1/categories';

export const categoriesApi = {
    getList: async(params: GetCategoriesRequestDto) => {
        const response = await axiosPrivate.get<ApiResponse<CategoryResponseDto[]>>(BASE_URL, {params});
        return response.data;
    },

    getById: async(id: number) => {
        const response = await axiosPrivate.get<ApiResponse<CategoryResponseDto>>(`${BASE_URL}/${id}`);
        return response.data;
    },

    create: async(data: CreateCategoryRequestDto) => {
        const response = await axiosPrivate.post<ApiResponse<object>>(BASE_URL, data);
        return response.data;
    },

    update: async(id: number, data: UpdateCategoryRequestDto) => {
        const response = await axiosPrivate.patch<ApiResponse<object>>(`${BASE_URL}/${id}`, data);
        return response.data;
    },

    updateStatus: async(id: number, data: ChangeCategoryStatusRequestDto)=> {
        const response = await axiosPrivate.patch<ApiResponse<object>>(`${BASE_URL}/${id}/status`, data);
        return response.data;
    },

    delete: async(id: number) => {
        const response = await axiosPrivate.delete<ApiResponse<object>>(`${BASE_URL}/${id}`);
        return response.data;
    }
}
import { axiosInstance } from "@/libs/axios/axios-instance";
import { CategoryResponseDto, ChangeCategoryStatusRequestDto, CreateCategoryRequestDto, GetCategoriesRequestDto, UpdateCategoryRequestDto } from "./categories.dto";
import { ApiResponse } from "@/shared/types/response";

const BASE_URL = '/private/api/v1/categories';

export const categoriesApi = {
    getList: async(params: GetCategoriesRequestDto) => {
        const response = await axiosInstance.get<ApiResponse<CategoryResponseDto[]>>(BASE_URL, {params});
        return response.data;
    },

    getById: async(id: number) => {
        const response = await axiosInstance.get<ApiResponse<CategoryResponseDto>>(`${BASE_URL}/${id}`);
        return response.data;
    },

    create: async(data: CreateCategoryRequestDto) => {
        const response = await axiosInstance.post<ApiResponse<object>>(BASE_URL, {data});
        return response.data;
    },

    update: async(id: number, data: UpdateCategoryRequestDto) => {
        const response = await axiosInstance.put<ApiResponse<object>>(`${BASE_URL}/${id}`, {data});
        return response.data;
    },

    updateStatus: async(id: number, data: ChangeCategoryStatusRequestDto)=> {
        const response = await axiosInstance.patch<ApiResponse<object>>(`${BASE_URL}/${id}`, {data});
        return response.data;
    },

    delete: async(id: number) => {
        const response = await axiosInstance.delete<ApiResponse<object>>(`${BASE_URL}/${id}`);
        return response.data;
    }
}
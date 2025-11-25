import { ApiResponse } from "@/shared/types/response";
import { ChangeCategoryStatusRequestDto, CreateCategoryRequestDto, GetCatetoriesRequestDto, UpdateCategoryRequestDto } from "../apis/categories.dto";
import { Category } from "../models/categories.model";
import { categoriesApi } from "../apis/categories.api";
import { CategoryMapper } from "../apis/categories.mapper";

export const categoriesService = {
    async getList(params: GetCatetoriesRequestDto): Promise<ApiResponse<Category[]>> {
        const response = await categoriesApi.getList(params);
        return {
            message: response.message,
            data: CategoryMapper.toModelList(response.data) ,
            paging: response.paging
        };
    },

    async getById(id: number) : Promise<ApiResponse<Category>> {
        const response = await categoriesApi.getById(id);
        return {
            message: response.message,
            data: CategoryMapper.toModel(response.data)
        };
    },

    async create(data: CreateCategoryRequestDto) : Promise<ApiResponse<object>> {
        const response = await categoriesApi.create(data);
        return {
            message: response.message,
            data: response.data
        };
    },

    async update(id: number, data: UpdateCategoryRequestDto) : Promise<ApiResponse<object>> {
        const response = await categoriesApi.update(id, data);
        return {
            message: response.message,
            data: response.data
        };
    },

    async updateStatus(id: number, data: ChangeCategoryStatusRequestDto) : Promise<ApiResponse<object>> {
        const response = await categoriesApi.updateStatus(id, data);
        return {
            message: response.message,
            data: response.data
        }
    }
}
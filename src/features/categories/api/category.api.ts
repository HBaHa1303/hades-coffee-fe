import { axiosInstance } from '@/lib/axios/axios-instance';
import {
  CategoryListResponseDto,
  CategoryDetailResponseDto,
  CreateCategoryRequestDto,
  UpdateCategoryRequestDto,
  UpdateCategoryStatusRequestDto,
  MessageResponseDto,
  CategoryListQueryParams,
} from './category.dto';

const BASE_PATH = '/private/api/v1/categories';

export const categoryApi = {
  getList: async (params: CategoryListQueryParams) => {
    const response = await axiosInstance.get<CategoryListResponseDto>(BASE_PATH, { params });
    return response.data;
  },

  getById: async (id: number) => {
    const response = await axiosInstance.get<CategoryDetailResponseDto>(`${BASE_PATH}/${id}`);
    return response.data;
  },

  create: async (data: CreateCategoryRequestDto) => {
    const response = await axiosInstance.post<MessageResponseDto>(BASE_PATH, data);
    return response.data;
  },

  update: async (id: number, data: UpdateCategoryRequestDto) => {
    const response = await axiosInstance.put<MessageResponseDto>(`${BASE_PATH}/${id}`, data);
    return response.data;
  },

  updateStatus: async (id: number, data: UpdateCategoryStatusRequestDto) => {
    const response = await axiosInstance.patch<MessageResponseDto>(`${BASE_PATH}/${id}/status`, data);
    return response.data;
  },

  delete: async (id: number) => {
    const response = await axiosInstance.delete<MessageResponseDto>(`${BASE_PATH}/${id}`);
    return response.data;
  },
};
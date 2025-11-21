import { categoryApi } from '../api/category.api';
import { CategoryMapper } from '../api/category.mapper';
import {
  Category,
  CategoryListParams,
  CategoryListResult,
  CreateCategoryData,
  UpdateCategoryData,
  UpdateCategoryStatusData,
} from '../model/category.model';

export const categoryService = {
  async getList(params: CategoryListParams): Promise<CategoryListResult> {
    const response = await categoryApi.getList(params);
    return {
      categories: CategoryMapper.toModelList(response.data),
      paging: response.paging,
    };
  },

  async getById(id: number): Promise<Category> {
    const response = await categoryApi.getById(id);
    return CategoryMapper.toModel(response.data);
  },

  async create(data: CreateCategoryData): Promise<void> {
    await categoryApi.create(data);
  },

  async update(id: number, data: UpdateCategoryData): Promise<void> {
    await categoryApi.update(id, data);
  },

  async updateStatus(id: number, data: UpdateCategoryStatusData): Promise<void> {
    await categoryApi.updateStatus(id, data);
  },

  async delete(id: number): Promise<void> {
    await categoryApi.delete(id);
  },
};
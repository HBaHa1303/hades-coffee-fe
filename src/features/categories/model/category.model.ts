export type CategoryStatus = 'ACTIVE' | 'INACTIVE';

export interface Category {
  id: number;
  name: string;
  status: CategoryStatus;
}

export interface CategoryListParams {
  keyword?: string;
  page?: number;
  size?: number;
  status?: CategoryStatus;
}

export interface PagingInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  first: boolean;
  last: boolean;
}

export interface CategoryListResult {
  categories: Category[];
  paging: PagingInfo;
}

export interface CreateCategoryData {
  name: string;
}

export interface UpdateCategoryData {
  name: string;
}

export interface UpdateCategoryStatusData {
  status: CategoryStatus;
}

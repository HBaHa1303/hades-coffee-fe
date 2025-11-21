export type CategoryStatus = 'ACTIVE' | 'INACTIVE';

export interface CategoryDto {
  id: number;
  name: string;
  status: CategoryStatus;
}

export interface CategoryListResponseDto {
  message: string;
  paging: {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
    first: boolean;
    last: boolean;
  };
  data: CategoryDto[];
}

export interface CategoryDetailResponseDto {
  message: string;
  data: CategoryDto;
}

export interface CreateCategoryRequestDto {
  name: string;
}

export interface UpdateCategoryRequestDto {
  name: string;
}

export interface UpdateCategoryStatusRequestDto {
  status: CategoryStatus;
}

export interface MessageResponseDto {
  message: string;
}

export interface CategoryListQueryParams {
  keyword?: string;
  page?: number;
  size?: number;
  status?: CategoryStatus;
}
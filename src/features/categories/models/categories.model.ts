import { CategoryStatus } from "@/shared/types/status";

export interface Category {
    id: number;
    name: string;
    status: CategoryStatus;
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

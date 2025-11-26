import { Filter } from "@/shared/types/filter";
import { CategoryStatus } from "@/shared/types/status";

// Request
export interface CreateCategoryRequestDto {
    name: string
}

export interface UpdateCategoryRequestDto {
    name: string;
}

export interface ChangeCategoryStatusRequestDto {
    status: CategoryStatus;
}

export class GetCategoriesRequestDto extends Filter {
    status?: CategoryStatus
    
    constructor(page: number, size: number, sortBy: string, asc: boolean, keyword: string, status: CategoryStatus) {
        super(page, size, sortBy, asc, keyword);
        this.status = status;
    }
}

// Response
export interface CategoryResponseDto {
    id: number;
    name: string;
    status: CategoryStatus;
}
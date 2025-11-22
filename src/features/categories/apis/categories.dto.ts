import { Filter } from "@/shared/types/filter";

export type CategoryStatus = 'ACTIVE' | 'INACTIVE';

export interface CreateCategoryRequestDto {
    name: string
}

export class GetCatetoriesRequestDto extends Filter {
    
}
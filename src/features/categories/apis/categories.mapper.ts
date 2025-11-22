import { Category } from "../models/categories.model";
import { CategoryResponseDto } from "./categories.dto";

export class CategoryMapper {
    static toModel(dto: CategoryResponseDto) : Category {
        return {
            id: dto.id,
            name: dto.name,
            status: dto.status
        };
    }

    static toModelList(dtos: CategoryResponseDto[]) : Category[] {
        return dtos.map((dto) => this.toModel(dto));
    } 

}
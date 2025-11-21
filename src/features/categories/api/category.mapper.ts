import { CategoryDto } from './category.dto';
import { Category } from '../model/category.model';

export class CategoryMapper {
  static toModel(dto: CategoryDto): Category {
    return {
      id: dto.id,
      name: dto.name,
      status: dto.status,
    };
  }

  static toModelList(dtos: CategoryDto[]): Category[] {
    return dtos.map((dto) => CategoryMapper.toModel(dto));
  }
}
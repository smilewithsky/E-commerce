import { Category } from 'src/modules/categories/entities/category.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findByCode(code: string): Promise<Category | null> {
    return this.categoryRepository.findOne({ where: { code } });
  }

  async create(createCategoryDto: CreateCategoryDto) {
    const checkCode = await this.findByCode(createCategoryDto.code);
    if (checkCode) {
      return new BadRequestException('Category code đã tồn tại');
    } else {
      const category = this.categoryRepository.create(createCategoryDto);
      return await this.categoryRepository.save(category);
    }
  }

  findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    const check = await this.categoryRepository.findOneBy({ id });
    if (check) {
      return check;
    } else {
      throw new BadRequestException('Không tìm thấy catergory');
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const check = await this.categoryRepository.findOneBy({ id });

    const category = this.categoryRepository.merge(check, updateCategoryDto);
    return this.categoryRepository.save(category);
  }

  async remove(id: number) {
    const check = await this.categoryRepository.findOneBy({ id });
    return this.categoryRepository.remove(check);
  }
}

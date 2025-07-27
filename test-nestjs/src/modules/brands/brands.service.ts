import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}
  async findOne(id: number) {
    const check = await this.brandRepository.findOneBy({ id });
    if (check) {
      return check;
    } else {
      throw new BadRequestException('Không tìm thấy brand');
    }
  }

  create(createBrandDto: CreateBrandDto) {
    const brand = this.brandRepository.create(createBrandDto);
    return this.brandRepository.save(brand);
  }

  findAll() {
    return this.brandRepository.find();
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    const check = await this.findOne(id);
    if (check) {
      const category = this.brandRepository.merge(check, updateBrandDto);
      return this.brandRepository.save(category);
    }
  }

  async remove(id: number) {
    const check = await this.findOne(id);
    if (check) {
      return this.brandRepository.remove(check);
    } else {
      throw new BadRequestException('Không tìm thấy brand để xóa');
    }
  }
}

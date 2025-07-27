import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}
  create(
    createProductDto: CreateProductDto,
    images: {
      imageUrl: string;
      isThumbnail: boolean;
    }[],
  ) {
    const product = this.productsRepository.create({
      ...createProductDto,
      images, // OneToMany có cascade
    });
    return this.productsRepository.save(product);
  }

  findAll() {
    return this.productsRepository.find();
  }

  async findOne(id: number) {
    const check = await this.productsRepository.findOneBy({ id });
    if (check) {
      return check;
    } else {
      throw new BadRequestException('Không tìm thấy sản phẩm');
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const check = await this.findOne(id);
    if (!check) {
      throw new BadRequestException('Không tìm thấy sản phẩm');
    }
    const product = this.productsRepository.merge(check, updateProductDto);
    return this.productsRepository.save(product);
  }

  async remove(id: number) {
    const check = await this.findOne(id);
    if (!check) {
      throw new BadRequestException('Không tìm thấy sản phẩm');
    } else {
      await this.productsRepository.delete(id);
      return `Sản phẩm với ID ${id} đã được xóa`;
    }
  }
}

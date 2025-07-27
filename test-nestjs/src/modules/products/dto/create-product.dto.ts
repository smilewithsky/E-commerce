import { Type } from 'class-transformer';
import { IsNotEmpty, MaxLength, IsNumber, Min, IsOptional, IsInt } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Tên sản phẩm không được để trống' })
  @MaxLength(100, { message: 'Tên sản phẩm tối đa 100 ký tự' })
  name: string;

  @IsNotEmpty({ message: 'Mô tả không được để trống' })
  @MaxLength(1000, { message: 'Mô tả tối đa 1000 ký tự' })
  description: string;

  @IsNotEmpty({ message: 'Giá sản phẩm không được để trống' })
  @IsNumber({}, { message: 'Giá phải là số' })
  @Min(0, { message: 'Giá tối thiểu là 0' })
  @Type(() => Number)
  price: number;

  @IsNotEmpty({ message: 'Số lượng tồn kho không được để trống' })
  @IsInt({ message: 'Số lượng tồn kho phải là số nguyên' })
  @Min(0, { message: 'Tồn kho tối thiểu là 0' })
  @Type(() => Number)
  stock_quantity: number;

  @IsOptional()
  @IsNumber({}, { message: 'brandId phải là số' })
  @Type(() => Number)
  brandId?: number;

  @IsOptional()
  @IsNumber({}, { message: 'categoryId phải là số' })
  @Type(() => Number)
  categoryId?: number;
}

import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateBrandDto {
  @IsNotEmpty({ message: 'Tên thương hiệu không được để trống' })
  @MaxLength(100, { message: 'Tên thương hiệu không được vượt quá 100 ký tự' })
  name: string;

  @IsNotEmpty({ message: 'Description không được để trống' })
  @MaxLength(1000, { message: 'Description không được vượt quá 1000 ký tự' })
  description: string;
}

import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Category code không được để trống' })
  @MaxLength(100, { message: 'Category code không được vượt quá 100 ký tự' })
  code: string;
  @IsNotEmpty({ message: 'Category Name không được để trống' })
  @MaxLength(100, { message: 'Category Name không được vượt quá 100 ký tự' })
  name: string;

  @IsNotEmpty({ message: 'Description không được để trống' })
  @MaxLength(1000, { message: 'Description không được vượt quá 1000 ký tự' })
  description: string;
}

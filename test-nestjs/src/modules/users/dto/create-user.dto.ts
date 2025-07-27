import { IsEmail, IsNotEmpty, MinLength, MaxLength, IsString, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Tên không được để trống' })
  @MaxLength(100, { message: 'Tên không được vượt quá 100 ký tự' })
  name: string;

  @IsNotEmpty({ message: 'Role không được để trống' })
  @IsString({ message: 'Role phải là chuỗi' })
  @IsIn(['admin', 'user'], { message: 'Role chỉ được là admin hoặc user' })
  role: string;

  @IsEmail({}, { message: 'Email không hợp lệ' })
  email: string;

  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  password: string;
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'; // ✅ Import toàn bộ thành object

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly UsersService: Repository<User>) {}
  findUserByEmail(email: string) {
    return this.UsersService.findOneBy({ email });
  }

  async checkById(id: number) {
    return await this.UsersService.findOneBy({ id });
  }

  async create(createUserDto: CreateUserDto) {
    const check = await this.findUserByEmail(createUserDto.email);
    if (check) {
      throw new BadRequestException('Email đã được sử dụng');
    } else {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10); // ✅ mã hóa trước
      const user = this.UsersService.create({
        ...createUserDto,
        password: hashedPassword,
        wishlistItems: [],
      });
      return this.UsersService.save(user);
    }
  }

  findAll() {
    return this.UsersService.find();
  }

  async findOne(id: number) {
    const user: User | null = await this.checkById(id);
    if (!user) {
      throw new BadRequestException('Không tìm thấy người dùng');
    } else {
      return user;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const check: User | null = await this.checkById(id);
    if (!check) {
      throw new BadRequestException('Không tìm thấy người dùng');
    } else {
      const user = this.UsersService.merge(check, updateUserDto);
      return this.UsersService.save(user);
    }
  }

  async remove(id: number) {
    const check: User | null = await this.checkById(id);
    if (!check) {
      throw new BadRequestException('Không tìm thấy người dùng');
    } else {
      return this.UsersService.delete(id);
    }
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.findUserByEmail(email);
    if (!user) {
      return null;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }
}

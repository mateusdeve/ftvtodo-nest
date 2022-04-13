import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const newUser = User.create(createUserDto)
    return await newUser.save();
  }

  async findAll() {
    return await User.findAndCount();
  }

  async findOne(id: number) {
    return await User.findOne({id});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await User.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await User.delete({id});
  }
}

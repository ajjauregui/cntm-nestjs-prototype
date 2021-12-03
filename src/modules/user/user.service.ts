import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './Dtos/create-user.dto';
import { UpdateUserDTO } from './Dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository')
    private readonly _userRepository: UserRepository,
  ) {}

  findOne(id: number): Promise<UserEntity> {
    return this._userRepository.findOne(id);
  }

  async findAll(): Promise<UserEntity[]> {
    return this._userRepository.find({ status: 'ACTIVE' });
  }
  async create(userData: CreateUserDTO): Promise<UserEntity> {
    return await this._userRepository.save(userData);
  }
  async update(userData: UpdateUserDTO, id: number): Promise<UserEntity> {
    await this._userRepository.update(id, userData);
    return this._userRepository.findOne(id);
  }
  async delete(id: number): Promise<string> {
    await this._userRepository.update(id, { status: 'INACTIVE' });
    return 'Usuario eliminado satisfactoriamente';
  }
}

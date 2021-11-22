import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './Dtos/create-user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository')
    private readonly _userRepository: UserRepository,
  ) {}

  async findOne(id: number): Promise<UserEntity> {
    return this._userRepository.findOne(id);
  }

  async findAll(): Promise<UserEntity[]> {
    return this._userRepository.find({ status: 'ACTIVE' });
  }
  async create(userData: CreateUserDTO): Promise<UserEntity> {
    return await this._userRepository.save(userData);
  }
}

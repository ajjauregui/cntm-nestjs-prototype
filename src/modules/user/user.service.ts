import { Inject, Injectable } from '@nestjs/common';
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
}

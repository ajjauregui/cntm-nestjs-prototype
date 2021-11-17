import { Controller, Get, Inject, Param } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    @Inject('UserService')
    private readonly _userService: UserService,
  ) {}

  @Get()
  findAll(): Promise<UserEntity[]> {
    return this._userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number): Promise<UserEntity> {
    return this._userService.findOne(id);
  }
}

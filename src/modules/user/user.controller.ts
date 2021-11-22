import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDTO } from './Dtos/create-user.dto';
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
  @Post('create')
  async create(@Body() userData: CreateUserDTO): Promise<UserEntity> {
    try {
      return await this._userService.create(userData);
    } catch (err) {
      throw new HttpException('Error al Crear el User', HttpStatus.BAD_REQUEST);
    }
  }
}

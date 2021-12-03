import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './Dtos/create-user.dto';
import { UpdateUserDTO } from './Dtos/update-user.dto';
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
      throw new HttpException(
        'Error al Crear el usuario',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() UserData: UpdateUserDTO,
  ): Promise<UserEntity> {
    try {
      return await this._userService.update(UserData, id);
    } catch (err) {
      throw new HttpException(
        'Error al actualizar al usuario',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<string> {
    try {
      return await this._userService.delete(id);
    } catch (err) {
      throw new HttpException(
        'Error al eliminar al usuario',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

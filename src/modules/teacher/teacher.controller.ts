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
import { CreateTeacherDTO } from './Dtos/create-teacher.dto';
import { UpdateTeacherDTO } from './Dtos/update-teacher.dto';
import { TeacherEntity } from './teacher.entity';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(
    @Inject('TeacherService')
    private readonly _teacherService: TeacherService,
  ) {}

  @Get()
  findAll(): Promise<TeacherEntity[]> {
    return this._teacherService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number): Promise<TeacherEntity> {
    return this._teacherService.findOne(id);
  }
  @Post('create')
  async create(@Body() teacherData: CreateTeacherDTO): Promise<TeacherEntity> {
    try {
      return await this._teacherService.create(teacherData);
    } catch (err) {
      throw new HttpException(
        'Error al Crear el Teacher',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() teacherData: UpdateTeacherDTO,
  ): Promise<TeacherEntity> {
    try {
      return await this._teacherService.update(teacherData, id);
    } catch (err) {
      throw new HttpException(
        'Error al actualizar al tutor',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<string> {
    try {
      return await this._teacherService.delete(id);
    } catch (err) {
      throw new HttpException(
        'Error al eliminar al tutor',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

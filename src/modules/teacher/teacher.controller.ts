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
import { CreateTeacherDTO } from './Dtos/create-teacher.dto';
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
}

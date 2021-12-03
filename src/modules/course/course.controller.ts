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
import { CourseEntity } from './course.entity';
import { CourseService } from './course.service';
import { CreateCourseDTO } from './Dtos/create-course.dto';
import { UpdateCourseDTO } from './Dtos/update-course.dto';

@Controller('courses')
export class CourseController {
  constructor(
    @Inject('CourseService')
    private readonly _courseService: CourseService,
  ) {}

  @Get()
  findAll(): Promise<CourseEntity[]> {
    return this._courseService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number): Promise<CourseEntity> {
    return this._courseService.findOne(id);
  }
  @Post('create')
  async create(@Body() courseData: CreateCourseDTO): Promise<CourseEntity> {
    try {
      return await this._courseService.create(courseData);
    } catch (err) {
      throw new HttpException(
        'Error al Crear el Course',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() courseData: UpdateCourseDTO,
  ): Promise<CourseEntity> {
    try {
      return await this._courseService.update(courseData, id);
    } catch (err) {
      throw new HttpException(
        'Error al actualizar al curso',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<string> {
    try {
      return await this._courseService.delete(id);
    } catch (err) {
      throw new HttpException(
        'Error al eliminar al curso',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

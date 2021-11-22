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
import { CourseEntity } from './course.entity';
import { CourseService } from './course.service';
import { CreateCourseDTO } from './Dtos/create-course.dto';

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
}

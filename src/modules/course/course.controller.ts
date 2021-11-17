import { Controller, Get, Inject, Param } from '@nestjs/common';
import { CourseEntity } from './course.entity';
import { CourseService } from './course.service';

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
}

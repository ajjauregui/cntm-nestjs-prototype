import { Controller, Get, Inject, Param } from '@nestjs/common';
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
}

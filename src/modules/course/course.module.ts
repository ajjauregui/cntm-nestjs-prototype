import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseRepository } from './course.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository])],
})
export class CourseModule {}

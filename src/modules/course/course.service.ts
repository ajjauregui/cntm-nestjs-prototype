import { Inject, Injectable } from '@nestjs/common';
import { CourseEntity } from './course.entity';
import { CourseRepository } from './course.repository';
import { CreateCourseDTO } from './Dtos/create-course.dto';
import { UpdateCourseDTO } from './Dtos/update-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @Inject('CourseRepository')
    private readonly _courseRepository: CourseRepository,
  ) {}

  async findOne(id: number): Promise<CourseEntity> {
    return this._courseRepository.findOne(id);
  }

  async findAll(): Promise<CourseEntity[]> {
    return this._courseRepository.find({ status: 'ACTIVE' });
  }
  async create(courseData: CreateCourseDTO): Promise<CourseEntity> {
    return await this._courseRepository.save(courseData);
  }
  async update(
    teacherData: UpdateCourseDTO,
    id: number,
  ): Promise<CourseEntity> {
    await this._courseRepository.update(id, teacherData);
    return this._courseRepository.findOne(id);
  }
  async delete(id: number): Promise<string> {
    await this._courseRepository.update(id, { status: 'INACTIVE' });
    return 'Curso eliminado satisfactoriamente';
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { TeacherEntity } from './teacher.entity';
import { TeacherRepository } from './teacher.repository';

@Injectable()
export class TeacherService {
  constructor(
    @Inject('TeacherRepository')
    private readonly _teacherRepository: TeacherRepository,
  ) {}

  async findOne(id: number): Promise<TeacherEntity> {
    return this._teacherRepository.findOne(id);
  }

  async findAll(): Promise<TeacherEntity[]> {
    return this._teacherRepository.find({ status: 'ACTIVE' });
  }
}

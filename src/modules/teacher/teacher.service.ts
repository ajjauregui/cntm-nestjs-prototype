import { Inject, Injectable } from '@nestjs/common';
import { CreateTeacherDTO } from './Dtos/create-teacher.dto';
import { UpdateTeacherDTO } from './Dtos/update-teacher.dto';
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

  async create(teacherData: CreateTeacherDTO): Promise<TeacherEntity> {
    return await this._teacherRepository.save(teacherData);
  }
  async update(
    teacherData: UpdateTeacherDTO,
    id: number,
  ): Promise<TeacherEntity> {
    await this._teacherRepository.update(id, teacherData);
    return this._teacherRepository.findOne(id);
  }
  async delete(id: number): Promise<string> {
    await this._teacherRepository.update(id, { status: 'INACTIVE' });
    return 'Tutor eliminado satisfactoriamente';
  }
}

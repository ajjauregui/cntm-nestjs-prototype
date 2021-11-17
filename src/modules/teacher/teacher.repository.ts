import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { TeacherEntity } from './teacher.entity';

@Injectable()
@EntityRepository(TeacherEntity)
export class TeacherRepository extends Repository<TeacherEntity> {}

import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CourseEntity } from './course.entity';

@Injectable()
@EntityRepository(CourseEntity)
export class CourseRepository extends Repository<CourseEntity> {}

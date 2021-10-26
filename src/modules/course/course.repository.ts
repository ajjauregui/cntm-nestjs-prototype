import { EntityRepository, Repository } from 'typeorm';
import { CourseEntity } from './course.entity';

@EntityRepository(CourseEntity)
export class CourseRepository extends Repository<CourseEntity> {}

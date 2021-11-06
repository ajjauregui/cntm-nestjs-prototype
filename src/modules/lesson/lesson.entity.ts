import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CourseEntity } from '../course/course.entity';
@Entity('lessons')
export class LessonEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @ManyToOne(() => CourseEntity, (course) => course.lessons, {
    nullable: false,
  })
  @JoinColumn({ name: 'fk_course' })
  course: CourseEntity;
}

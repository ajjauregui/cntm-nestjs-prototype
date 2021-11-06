import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LessonEntity } from '../lesson/lesson.entity';
import { SuscriptionEntity } from '../suscription/suscription.entity';
import { TeacherEntity } from '../teacher/teacher.entity';
@Entity('courses')
export class CourseEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'varchar', default: 'ACTVE', length: 8, nullable: false })
  status: string;

  @ManyToOne(() => TeacherEntity, (teacher) => teacher.courses, {
    nullable: false,
  })
  @JoinColumn({ name: 'fk_teacher' })
  teacher: TeacherEntity;

  @OneToMany(() => SuscriptionEntity, (suscription) => suscription.course, {
    nullable: false,
    cascade: ['insert'],
  })
  suscriptions?: SuscriptionEntity[];

  @OneToMany(() => LessonEntity, (lesson) => lesson.course, {
    nullable: false,
    cascade: ['insert'],
  })
  lessons?: LessonEntity[];
}

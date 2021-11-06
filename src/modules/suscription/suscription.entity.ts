import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CourseEntity } from '../course/course.entity';
import { UserEntity } from '../user/user.entity';
@Entity('suscriptions')
export class SuscriptionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  type: string;

  @ManyToOne(() => UserEntity, (user) => user.suscriptions, { nullable: false })
  @JoinColumn({ name: 'fk_user' })
  user: UserEntity;

  @ManyToOne(() => CourseEntity, (course) => course.suscriptions, {
    nullable: false,
  })
  @JoinColumn({ name: 'fk_course' })
  course: CourseEntity;
}

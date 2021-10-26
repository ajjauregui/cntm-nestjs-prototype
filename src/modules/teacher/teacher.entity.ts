import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('teachers')
export class TeacherEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  last_name: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  experiencia: string;

  @Column({ type: 'varchar', default: 'ACTVE', length: 8, nullable: false })
  status: string;
}

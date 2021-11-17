import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SuscriptionEntity } from '../suscription/suscription.entity';
@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  last_name: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  gender: string;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8, nullable: false })
  status: string;

  @OneToMany(() => SuscriptionEntity, (suscription) => suscription.user, {
    nullable: false,
    cascade: ['insert'],
  })
  suscriptions?: SuscriptionEntity[];
}

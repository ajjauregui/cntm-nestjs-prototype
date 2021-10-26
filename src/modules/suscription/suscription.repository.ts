import { EntityRepository, Repository } from 'typeorm';
import { SuscriptionEntity } from './suscription.entity';

@EntityRepository(SuscriptionEntity)
export class SuscriptionRepository extends Repository<SuscriptionEntity> {}

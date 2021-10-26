import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuscriptionRepository } from './suscription.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SuscriptionRepository])],
})
export class SuscriptionModule {}

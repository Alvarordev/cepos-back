import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { Empresa } from 'src/empresa/entities/empresa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa])],
  providers: [SeedService],
})
export class SeedModule {}

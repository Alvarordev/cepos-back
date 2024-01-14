import { Module } from '@nestjs/common';
import { MultaService } from './multa.service';
import { MultaController } from './multa.controller';
import { Multa } from './entities/multa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MultaController],
  providers: [MultaService],
  imports: [TypeOrmModule.forFeature([Multa])],
})
export class MultaModule {}

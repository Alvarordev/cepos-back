import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { Empresa } from './entities/empresa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EmpresaController],
  providers: [EmpresaService],
  imports: [TypeOrmModule.forFeature([Empresa])],
})
export class EmpresaModule {}

import { Module } from '@nestjs/common';
import { TipocepoService } from './tipocepo.service';
import { TipocepoController } from './tipocepo.controller';
import { Tipocepo } from './entities/tipocepo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TipocepoController],
  providers: [TipocepoService],
  imports: [TypeOrmModule.forFeature([Tipocepo])],
})
export class TipocepoModule {}

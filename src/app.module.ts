import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaModule } from './empresa/empresa.module';
import { SeedModule } from './seeds/seed/seed.module';
import { PerfilModule } from './perfil/perfil.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TipocepoModule } from './tipocepo/tipocepo.module';
import { MultaModule } from './multa/multa.module';
import { AuthModule } from './auth/auth.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres:Cd5FBG6fgg-ECBbfFdgc-e34A-4G4CeA@viaduct.proxy.rlwy.net:12670/railway',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    EmpresaModule,
    SeedModule,
    PerfilModule,
    UsuariosModule,
    TipocepoModule,
    MultaModule,
    AuthModule,
  ],
  controllers: [AppController],
  // providers: [SeedService],
})
export class AppModule {}

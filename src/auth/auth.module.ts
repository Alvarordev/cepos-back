import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
// import { UsuariosService } from 'src/usuarios/usuarios.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'SECRETO_SAT',
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UsuariosModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}

import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsuariosService } from './../usuarios/usuarios.service';
import { EncryptionUtil } from 'src/utils/password.util';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    // @Inject(UsuariosService) private readonly usuariosService: UsuariosService,
    private readonly usuariosService: UsuariosService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Acceso' })
  async login(@Body() _createAuthDto: CreateAuthDto) {
    const { vAliasUsuario, vClaveUsuario } = _createAuthDto;

    const userData = await this.usuariosService.findByUser(
      vAliasUsuario,
      vClaveUsuario,
    );

    if (!userData) {
      // Hashear la contraseña y buscar nuevamente
      const hashedPassword = await EncryptionUtil.hashPassword(vClaveUsuario);
      const hashedUserData = await this.usuariosService.findByUser(
        vAliasUsuario,
        hashedPassword,
      );

      if (!hashedUserData) {
        throw new UnauthorizedException('No autorizado');
      }

      const userObject = {
        iCodUsuario: hashedUserData.iCodUsuario,
        vAliasUsuario: hashedUserData.vAliasUsuario,
        iCodEmpresa: hashedUserData.empresa.iCodEmpresa,
        iCodPerfil_: hashedUserData.perfil.iCodPerfil,
        vNombreEmpresa: hashedUserData.empresa.vNombreEmpresa,
        vDescripcionPerfil: hashedUserData.perfil.vDescripcionPerfil,
      };

      const token = await this.authService.generateToken(userObject);
      const RefreshToken =
        await this.authService.generateRefreshToken(userObject);

      return { access_token: token, refresh_token: RefreshToken };
    }

    const userObject = {
      iCodUsuario: userData.iCodUsuario,
      vAliasUsuario: userData.vAliasUsuario,
      iCodEmpresa: userData.empresa.iCodEmpresa,
      iCodPerfil_: userData.perfil.iCodPerfil,
      vNombreEmpresa: userData.empresa.vNombreEmpresa,
      vDescripcionPerfil: userData.perfil.vDescripcionPerfil,
    };

    const token = await this.authService.generateToken(userObject);
    const RefreshToken =
      await this.authService.generateRefreshToken(userObject);

    return { access_token: token, refresh_token: RefreshToken };
  }
}

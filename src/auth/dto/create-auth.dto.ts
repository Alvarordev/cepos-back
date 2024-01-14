import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @ApiProperty({ example: 'usuario1', description: 'Nombre de usuario' })
  vAliasUsuario: string;

  @IsString()
  @ApiProperty({ example: 'clave1', description: 'Clave de usuario' })
  vClaveUsuario: string;
}

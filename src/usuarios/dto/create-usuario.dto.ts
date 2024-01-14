import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Código del perfil asociado al usuario.',
  })
  iCodPerfil: number;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Código de la empresa asociada al usuario.',
  })
  iCodEmpresa: number;

  @IsString()
  @ApiProperty({ example: 'usuario1', description: 'Nombre de usuario' })
  vAliasUsuario: string;

  @IsString()
  @ApiProperty({ example: 'usuario1', description: 'Clave de usuario' })
  vClaveUsuario: string;

  @IsDateString()
  @ApiProperty({
    example: '2023-12-31',
    description: 'Fecha de vencimiento del usuario',
  })
  dtFechaVencimiento: Date;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Código de usuario de creación del registro',
  })
  iCodigoUsuarioCreacion: number;
}

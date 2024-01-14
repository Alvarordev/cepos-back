import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: 'Código del perfil asociado al usuario.',
  })
  iCodPerfil: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: 'Código de la empresa asociada al usuario.',
  })
  iCodEmpresa: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'usuario1', description: 'Nombre de usuario' })
  vAliasUsuario: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'usuario1', description: 'Clave de usuario' })
  vClaveUsuario: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    example: '2023-12-31',
    description: 'Fecha de vencimiento del usuario',
  })
  dtFechaVencimiento: Date;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    example: true,
    default: true,
    description:
      'Código de estado del registro (true=habilitado, false=deshabilitado)',
  })
  bEstadoRegistro: boolean;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Código de usuario de actualización del registro',
  })
  iCodigoUsuarioModificacion: number;

  @IsDate()
  dtFechaModificacion: Date = new Date();
}

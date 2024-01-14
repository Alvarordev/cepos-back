import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePerfilDto } from './create-perfil.dto';

export class UpdatePerfilDto extends PartialType(CreatePerfilDto) {
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: 'Código de la empresa asociada al perfil.',
  })
  iCodEmpresa: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Perfil 1', description: 'Descripción del perfil.' })
  vDescripcionPerfil: string;

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

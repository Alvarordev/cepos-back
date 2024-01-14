import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateEmpresaDto } from './create-empresa.dto';

export class UpdateEmpresaDto extends PartialType(CreateEmpresaDto) {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Empresa 1', description: 'Nombre de la empresa.' })
  vNombreEmpresa: string;

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

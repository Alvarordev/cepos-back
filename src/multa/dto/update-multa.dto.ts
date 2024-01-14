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
import { CreateMultaDto } from './create-multa.dto';

export class UpdateMultaDto extends PartialType(CreateMultaDto) {
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: 'Código de la empresa asociada al perfil.',
  })
  iCodEmpresa: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: 'Código de tipo de cepo.',
  })
  iCodTipoCepo: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 12.12341234,
    description: 'Coordenadas X',
  })
  gCoordenadasXMulta: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 12.12341234,
    description: 'Coordenadas Y',
  })
  gCoordenadasYMulta: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Direccion 1',
    description: 'Dirección de multa',
  })
  vDireccionMulta: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Concepto 1',
    description: 'Concepto de multa',
  })
  vConceptoMulta: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 999.99,
    description: 'Costo de multa',
  })
  dpCostoMulta: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Tarjeta de propiedad 1',
    description: 'Tarjeta de propiedad',
  })
  vTarjetaPropiedad: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Licencia de conducir 1',
    description: 'Licencia de conducir',
  })
  vLicenciaConducir: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'ABC-123',
    description: 'Placa de auto',
  })
  vPlacaAuto: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Nissan',
    description: 'Marca de auto',
  })
  vMarcaAuto: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Centra',
    description: 'Modelo de auto',
  })
  vModeloAuto: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Rojo',
    description: 'Color de auto',
  })
  vColorAuto: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 4,
    description: 'Nro de llantas',
  })
  iNumeroLlantas: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '12341234',
    description: 'Código de preliquidación',
  })
  vCodigoPreliquidacion: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    example: '2023-12-31 15:30:30',
    description: 'Fecha de pago',
  })
  dFechaPago: Date;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: 'Código de usuario de bloqueo',
  })
  iCodUsuarioBloqueo: number;

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    example: '2023-12-31 15:30:30',
    description: 'Fecha de bloqueo',
  })
  dtFechaBloqueo: Date;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: 'Código de usuario de desbloqueo',
  })
  iCodUsuarioDesbloqueo: number;

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    example: '2023-12-31 15:30:30',
    description: 'Fecha de desbloqueo',
  })
  dtFechaDesbloqueo: Date;

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

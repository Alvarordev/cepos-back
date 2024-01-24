import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsDateString, IsOptional } from "class-validator";

export class CreateMultaDto {
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "Código de la empresa asociada al perfil.",
  })
  iCodEmpresa: number;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "Código de tipo de cepo.",
  })
  iCodTipoCepo: number;

  @IsNumber()
  @ApiProperty({
    example: 12.12341234,
    description: "Coordenadas X",
  })
  gCoordenadasXMulta: number;

  @IsNumber()
  @ApiProperty({
    example: 12.12341234,
    description: "Coordenadas Y",
  })
  gCoordenadasYMulta: number;

  @IsString()
  @ApiProperty({
    example: "Direccion 1",
    description: "Dirección de multa",
  })
  vDireccionMulta: string;

  @IsString()
  @ApiProperty({
    example: "Concepto 1",
    description: "Concepto de multa",
  })
  vConceptoMulta: string;

  @IsNumber()
  @ApiProperty({
    example: 999.99,
    description: "Costo de multa",
  })
  dpCostoMulta: number;

  @IsString()
  @ApiProperty({
    example: "Tarjeta de propiedad 1",
    description: "Tarjeta de propiedad",
  })
  vTarjetaPropiedad: string;

  @IsString()
  @ApiProperty({
    example: "Licencia de conducir 1",
    description: "Licencia de conducir",
  })
  vLicenciaConducir: string;

  @IsString()
  @ApiProperty({
    example: "ABC-123",
    description: "Placa de auto",
  })
  vPlacaAuto: string;

  @IsString()
  @ApiProperty({
    example: "Nissan",
    description: "Marca de auto",
  })
  vMarcaAuto: string;

  @IsString()
  @ApiProperty({
    example: "Centra",
    description: "Modelo de auto",
  })
  vModeloAuto: string;

  @IsString()
  @ApiProperty({
    example: "Rojo",
    description: "Color de auto",
  })
  vColorAuto: string;

  @IsNumber()
  @ApiProperty({
    example: 4,
    description: "Nro de llantas",
  })
  iNumeroLlantas: number;

  @IsString()
  @ApiProperty({
    example: "12341234",
    description: "Código de preliquidación",
  })
  vCodigoPreliquidacion: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: "Código de usuario de bloqueo",
  })
  iCodUsuarioBloqueo: number;

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    example: "2023-12-31 15:30:30",
    description: "Fecha de bloqueo",
  })
  dtFechaBloqueo: Date;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: "Código de usuario de desbloqueo",
  })
  iCodUsuarioDesbloqueo: number;

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    example: "2023-12-31 15:30:30",
    description: "Fecha de desbloqueo",
  })
  dtFechaDesbloqueo: Date;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "Código de usuario de creación del registro",
  })
  iCodigoUsuarioCreacion: number;
}

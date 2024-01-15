import { PartialType } from "@nestjs/mapped-types";
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { CreateTipocepoDto } from "./create-tipocepo.dto";

export class UpdateTipocepoDto extends PartialType(CreateTipocepoDto) {
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
    description: "Código de la empresa asociada al perfil.",
  })
  iCodEmpresa: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: "Cepo 1", description: "Descripción del cepo" })
  vDescripcionCepo: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 9.99,
    description: "Costo del cepo",
  })
  vCostoCepo: number;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    example: true,
    default: true,
    description:
      "Código de estado del registro (true=habilitado, false=deshabilitado)",
  })
  bEstadoRegistro: boolean;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "Código de usuario de actualización del registro",
  })
  iCodigoUsuarioModificacion: number;

  @IsDateString()
  dtFechaModificacion: Date;
}

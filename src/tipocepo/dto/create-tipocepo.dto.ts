import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateTipocepoDto {
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "Código de la empresa asociada al perfil.",
  })
  iCodEmpresa: number;

  @IsString()
  @ApiProperty({ example: "Cepo 1", description: "Descripción del cepo." })
  vDescripcionCepo: string;

  @IsNumber()
  @ApiProperty({
    example: 9.99,
    description: "Costo del cepo",
  })
  vCostoCepo: number;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "Código de usuario de creación del registro",
  })
  iCodigoUsuarioCreacion: number;
}

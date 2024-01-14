import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  @ApiProperty({ example: 'Empresa 1', description: 'Nombre de la empresa.' })
  vNombreEmpresa: string;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Código de usuario de creación del registro',
  })
  iCodigoUsuarioCreacion: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePerfilDto {
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Código de la empresa asociada al perfil.',
  })
  iCodEmpresa: number;

  @IsString()
  @ApiProperty({ example: 'Perfil 1', description: 'Descripción del perfil.' })
  vDescripcionPerfil: string;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Código de usuario de creación del registro',
  })
  iCodigoUsuarioCreacion: number;
}

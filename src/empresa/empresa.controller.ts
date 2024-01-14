import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('empresa')
@ApiTags('Empresa')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear registro en la tabla empresa.' })
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.create(createEmpresaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los registros de la tabla empresa.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de empresas',
    type: [CreateEmpresaDto],
  })
  @ApiResponse({
    status: 200,
    description: 'Los registros se obtienen correctamente.',
  })
  findAll() {
    return this.empresaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar un registro en la tabla empresa.' })
  async findOne(@Param('id') id: number) {
    const empresa = await this.empresaService.findOne(id);
    if (!empresa) {
      throw new NotFoundException('Empresa no encontrado');
    }
    return empresa;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un registro en la tabla empresa.' })
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(+id, updateEmpresaDto);
  }
}

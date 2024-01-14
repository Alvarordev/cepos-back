import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TipocepoService } from './tipocepo.service';
import { CreateTipocepoDto } from './dto/create-tipocepo.dto';
import { UpdateTipocepoDto } from './dto/update-tipocepo.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('tipocepo')
@ApiTags('Tipo cepo')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class TipocepoController {
  constructor(private readonly tipocepoService: TipocepoService) {}

  @Post()
  create(@Body() createTipocepoDto: CreateTipocepoDto) {
    return this.tipocepoService.create(createTipocepoDto);
  }

  @Get()
  findAll() {
    return this.tipocepoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipocepoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipocepoDto: UpdateTipocepoDto,
  ) {
    return this.tipocepoService.update(+id, updateTipocepoDto);
  }
}
